import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../AdminNavbar";
import { baseURL } from "@/Api/Baseurl";

interface Collection {
  id: number;
  collectionType: string;
  category: string;
  productName: string;
  color: string;
  size: string;
  description: string;
  images: string[];
}

const CollectionTable = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  // ---------------------------------------------------
  // FETCH COLLECTIONS FROM BACKEND
  // ---------------------------------------------------
  useEffect(() => {
    fetch(`${baseURL}/api/get-all`)
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Filter logic
  const filtered = collections.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / entries);
  const paginatedData = filtered.slice((page - 1) * entries, page * entries);

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-collection/${id}`);
  };

  // ----------------------
  // DELETE COLLECTION
  // ----------------------
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this collection?")) return;

    try {
      const res = await fetch(`${baseURL}/api/delete-collection/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Deleted successfully!");

        // Remove from UI
        setCollections((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(data.error || "Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Collections</h1>
            <span className="bg-[#850E35] text-white px-3 py-1 rounded-full text-sm font-medium">
              {filtered.length}
            </span>
          </div>

          <button
            className="px-4 py-2 bg-[#850E35] text-white rounded-lg shadow hover:bg-[#6c0c2c]"
            onClick={() => navigate("/add-collection")}
          >
            + Add Collection
          </button>
        </div>

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
          {/* Show Entries */}
          <div className="flex items-center space-x-2">
            <span>Show</span>
            <select
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>entries</span>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-64"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-xl bg-white dark:bg-neutral-900">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 dark:bg-neutral-800">
              <tr>
                <th className="px-6 py-3 text-left font-medium">S.No</th>
                <th className="px-6 py-3 text-left font-medium">Collection</th>
                <th className="px-6 py-3 text-left font-medium">Category</th>
                <th className="px-6 py-3 text-left font-medium">Product</th>
                <th className="px-6 py-3 text-left font-medium">Image</th>
                <th className="px-6 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
                >
                  <td className="px-6 py-3">
                    {(page - 1) * entries + index + 1}
                  </td>
                  <td className="px-6 py-3">{item.collectionType}</td>
                  <td className="px-6 py-3">{item.category}</td>
                  
                  <td className="px-6 py-3">{item.productName}</td>

                  {/* Image */}
                  <td className="px-6 py-3">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={`${baseURL}/uploads/${item.images[0]}`}
                        alt={item.productName}
                        className="h-16 w-16 object-cover rounded-lg border"
                      />
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>

                  {/* Action Column */}
                  <td className="px-6 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/collection-view/${item.id}`)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleEdit(item.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginatedData.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-6 text-gray-500 dark:text-gray-400"
                  >
                    No collections found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm">
            Showing{" "}
            <strong>
              {(page - 1) * entries + 1} -{" "}
              {Math.min(page * entries, filtered.length)}
            </strong>{" "}
            of <strong>{filtered.length}</strong> entries
          </p>

          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
            >
              Previous
            </button>

            <span className="px-3">{page} / {totalPages}</span>

            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={page === totalPages}
              onClick={() => changePage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionTable;