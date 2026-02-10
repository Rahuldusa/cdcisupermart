import { useEffect, useState } from "react";
import Navbar from "../AdminNavbar";
import { baseURL } from "@/Api/Baseurl";
import { useNavigate } from "react-router-dom";


interface GalleryItem {
  id: number;
  type: "image" | "video";
  files: string[];
}

const GalleryTable = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(10);
const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  // Form States
  const [mediaType, setMediaType] = useState("image");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [remainingExistingFiles, setRemainingExistingFiles] = useState<string[]>([]);

  // -------------------------------------------------------------
  // Fetch Gallery
  // -------------------------------------------------------------
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    fetch(`${baseURL}/api/gallery/get`)
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((err) => console.error(err));
  };

  // -------------------------------------------------------------
  // Add Gallery Item — API Submit
  // -------------------------------------------------------------
  const handleSubmit = async () => {
    if (selectedFiles.length === 0) return alert("Please upload a file!");

    const formData = new FormData();
    formData.append("type", mediaType);

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const res = await fetch(`${baseURL}/api/gallery/add`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Gallery item added!");
      setShowAddModal(false);
      resetForm();
      fetchGallery();
    }
  };

  // -------------------------------------------------------------
  // Edit Gallery Item
  // -------------------------------------------------------------
  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setMediaType(item.type);
    setSelectedFiles([]);
    setRemainingExistingFiles([...item.files]); // Start with all existing files
    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    if (!editingItem) return;

    const formData = new FormData();
    formData.append("type", mediaType);

    // Send remaining existing files (files that weren't removed)
    formData.append("existingFiles", JSON.stringify(remainingExistingFiles));

    // Append new files
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const res = await fetch(`${baseURL}/api/gallery/update/${editingItem.id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      alert("Gallery item updated!");
      setShowEditModal(false);
      setEditingItem(null);
      resetForm();
      fetchGallery();
    }
  };

  // -------------------------------------------------------------
  // Delete Gallery Item
  // -------------------------------------------------------------
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this gallery item?")) {
      return;
    }

    try {
      const res = await fetch(`${baseURL}/api/gallery/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Gallery item deleted!");
        fetchGallery();
      } else {
        const error = await res.json();
        alert(error.message || "Failed to delete gallery item");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete gallery item");
    }
  };

  // -------------------------------------------------------------
  // File Management Functions
  // -------------------------------------------------------------
  const removeSelectedFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  const removeExistingFile = (index: number) => {
    const newRemainingFiles = remainingExistingFiles.filter((_, i) => i !== index);
    setRemainingExistingFiles(newRemainingFiles);
  };

  // Reset form states
  const resetForm = () => {
    setSelectedFiles([]);
    setMediaType("image");
    setRemainingExistingFiles([]);
  };


  // Filter and Pagination
  const filtered = gallery.filter((g) =>
    Object.values(g).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Gallery</h1>
            <span className="bg-[#850E35] text-white px-3 py-1 rounded-full text-sm font-medium">
              {filtered.length}
            </span>
          </div>

          <button
            className="px-4 py-2 bg-[#850E35] text-white rounded-lg shadow"
            onClick={() => setShowAddModal(true)}
          >
            + Add Gallery Item
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-between mb-4">
          <div>
            <span>Show</span>
            <select
              className="border ml-2 px-2 py-1"
              onChange={(e) => setEntries(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </div>

          <input
            className="border px-3 py-2 rounded"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow bg-white rounded-xl">
          <table className="min-w-full text-sm text">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-medium">S.No</th>
                <th className="px-6 py-3 text-left font-medium">Type</th>
                <th className="px-6 py-3 text-left font-medium">Preview</th>
                <th className="px-6 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginated.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-3">
                    {(page - 1) * entries + index + 1}
                  </td>
                  <td className="px-6 py-3 capitalize">{item.type}</td>
                 <td className="px-6 py-3">
  {/* VIDEO PREVIEW */}
  {item.type === "video" ? (
    <div className="h-20 w-20 rounded overflow-hidden bg-gray-200 relative">
      <video
        src={`${baseURL}/uploads/${item.files[0]}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  ) : (
    /* IMAGE PREVIEW */
    <div className="h-20 w-20 rounded overflow-hidden bg-gray-200 relative">
      <img
        src={`${baseURL}/uploads/${item.files[0]}`}
        alt="preview"
        className="absolute inset-0 w-full h-full object-cover block"
      />
    </div>
  )}
</td>

                  <td className="px-6 py-3">
                    <div className="flex gap-2">
                      <button
                       onClick={() => navigate(`/admin/gallery/${item.id}`)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginated.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-400">
                    No Gallery Items Found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p>
            Showing {(page - 1) * entries + 1} –{" "}
            {Math.min(page * entries, filtered.length)} of {filtered.length}
          </p>

          <div className="flex gap-3">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <span>{page} / {totalPages}</span>
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Add Gallery Item</h2>

            <label className="block mb-2 font-medium">Type</label>
            <select
              className="border px-3 py-2 rounded w-full mb-3"
              value={mediaType}
              onChange={(e) => {
                setMediaType(e.target.value);
                setSelectedFiles([]);
              }}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>

            {/* File Input */}
            <label className="block mb-2 font-medium">
              {mediaType === "image" ? "Upload Images" : "Upload Video"}
            </label>

            <input
              type="file"
              accept={mediaType === "image" ? "image/*" : "video/*"}
              multiple={mediaType === "image"}
              className="mb-3 w-full"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setSelectedFiles(prev => [...prev, ...files]);
              }}
            />

            {/* Selected Files Preview with Remove Option */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Selected Files</label>
              
              {mediaType === "image" && selectedFiles.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {selectedFiles.map((file, i) => (
                    <div key={i} className="relative">
                      <button
                        type="button"
                        onClick={() => removeSelectedFile(i)}
                        className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center z-10"
                      >
                        ×
                      </button>
                      <img
                        src={URL.createObjectURL(file)}
                        className="h-16 w-16 rounded object-cover border"
                        alt={`Preview ${i}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              {mediaType === "video" && selectedFiles.length > 0 && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedFiles([])}
                    className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center z-10"
                  >
                    ×
                  </button>
                  <video
                    className="h-32 rounded w-full border"
                    src={URL.createObjectURL(selectedFiles[0])}
                    controls
                  />
                </div>
              )}

              {selectedFiles.length === 0 && (
                <p className="text-gray-500 text-sm">No files selected</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={selectedFiles.length === 0}
                className="px-4 py-2 bg-[#850E35] text-white rounded disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Gallery Item</h2>

            <label className="block mb-2 font-medium">Type</label>
            <select
              className="border px-3 py-2 rounded w-full mb-3"
              value={mediaType}
              onChange={(e) => setMediaType(e.target.value)}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>

            {/* Existing Files Preview with Remove Option */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Existing Files</label>
              
              {editingItem.type === "video" ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => removeExistingFile(0)}
                    className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center z-10"
                  >
                    ×
                  </button>
                  <video
                    src={`${baseURL}/uploads/${remainingExistingFiles[0]}`}
                    className="h-32 rounded w-full border"
                    controls
                  />
                </div>
              ) : (
                <div className="flex gap-2 flex-wrap">
                  {remainingExistingFiles.map((file, i) => (
                    <div key={i} className="relative">
                      <button
                        type="button"
                        onClick={() => removeExistingFile(i)}
                        className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center z-10"
                      >
                        ×
                      </button>
                      <img
                        src={`${baseURL}/uploads/${file}`}
                        className="h-16 w-16 rounded object-cover border"
                        alt={`Existing ${i}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* New File Input */}
            <label className="block mb-2 font-medium">
              {mediaType === "image" ? "Add More Images" : "Replace Video"}
            </label>

            <input
              type="file"
              accept={mediaType === "image" ? "image/*" : "video/*"}
              multiple={mediaType === "image"}
              className="mb-3 w-full"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setSelectedFiles(prev => [...prev, ...files]);
              }}
            />

            {/* New Files Preview with Remove Option */}
            <div className="mb-4">
              {selectedFiles.length > 0 && (
                <>
                  <label className="block mb-2 font-medium">New Files</label>
                  
                  {mediaType === "image" && (
                    <div className="flex gap-2 flex-wrap">
                      {selectedFiles.map((file, i) => (
                        <div key={i} className="relative">
                          <button
                            type="button"
                            onClick={() => removeSelectedFile(i)}
                            className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center z-10"
                          >
                            ×
                          </button>
                          <img
                            src={URL.createObjectURL(file)}
                            className="h-16 w-16 rounded object-cover border"
                            alt={`New ${i}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {mediaType === "video" && (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setSelectedFiles([])}
                        className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center z-10"
                      >
                        ×
                      </button>
                      <video
                        className="h-32 rounded w-full border"
                        src={URL.createObjectURL(selectedFiles[0])}
                        controls
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingItem(null);
                  resetForm();
                }}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-[#850E35] text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryTable;