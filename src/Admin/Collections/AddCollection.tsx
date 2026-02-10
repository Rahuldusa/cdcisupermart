import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../AdminNavbar";
import { baseURL } from "@/Api/Baseurl";
import { useNavigate, useParams } from "react-router-dom";

// COLLECTION TYPES
const collectionTypes = ["Women", "Men", "Kids","Additional"];

// CATEGORY OPTIONS BASED ON COLLECTION TYPE
const categoryOptions: Record<string, string[]> = {
  Women: [
    "Sarees",
    "Lehenga",
    "Crop Top",
    "Gown",
    "Western Dresses",
    "Stitched Salwar Suit",
    "Night Wear",
    "Winter Collection",
    "Unstitched Suit Collection",
  ],
  Men: [
    "Sherwani",
    "Coat Pant",
    "Indo Western",
    "Kurta Pajama",
    "Blazer",
    "Jean/Shirt/T-shirt",
    "Unstitched Pant Shirt Collection",
    "Winter Collection",
  ],
  "Kids": ["Boys", "Girls"],
  
  Additional: [
    "Blankets",
    "Bedsheets",
    "Cushions",
    "Sofa Covers",
    "Door Mat",
    "Towel",
    "Pillow",
  ],
};

const AddCollection = () => {
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    collectionType: "",
    category: "",
    productName: "",
    description: "",
    images: [] as File[],
  });

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Check if in edit mode and fetch data
  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      fetchCollectionData();
    }
  }, [id]);

  // Fetch collection data for editing
  const fetchCollectionData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}/api/getbyid/${id}`);
      const collection = res.data;

      setFormData({
        collectionType: collection.collectionType || "",
        category: collection.category || "",
        productName: collection.productName || "",
        description: collection.description || "",
        images: [],
      });

      if (collection.images && collection.images.length > 0) {
        setExistingImages(collection.images);
      }
    } catch (err) {
      console.error("Failed to fetch collection:", err);
      alert("Failed to load collection data!");
    } finally {
      setLoading(false);
    }
  };

  // handle general inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file selection
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const newFiles = [...formData.images, ...files];

    // revoke old previews
    previewUrls.forEach((url) => URL.revokeObjectURL(url));

    // generate new previews
    const previews = newFiles.map((f) => URL.createObjectURL(f));

    setFormData({ ...formData, images: newFiles });
    setPreviewUrls(previews);

    if (inputRef.current) inputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    const oldUrl = previewUrls[index];
    if (oldUrl) URL.revokeObjectURL(oldUrl);

    const files = formData.images.filter((_, i) => i !== index);
    const previews = previewUrls.filter((_, i) => i !== index);

    setFormData({ ...formData, images: files });
    setPreviewUrls(previews);
  };

  const removeExistingImage = (index: number) => {
    const updatedImages = existingImages.filter((_, i) => i !== index);
    setExistingImages(updatedImages);
  };

  // ⭐⭐⭐ POST/PUT API Integration Here ⭐⭐⭐
  const handleSubmit = async () => {
    try {
      if (!formData.collectionType || !formData.category || !formData.productName) {
        alert("Please fill all required fields.");
        return;
      }

      setLoading(true);

      const data = new FormData();
      data.append("collectionType", formData.collectionType);
      data.append("category", formData.category);
      data.append("productName", formData.productName);
      data.append("description", formData.description);

      // Append new images
      formData.images.forEach((img) => data.append("images", img));

      // Append existing images that haven't been removed
      if (isEditMode) {
        data.append("oldImages", JSON.stringify(existingImages));
      }

      let res;
      if (isEditMode && id) {
        // UPDATE API
        res = await axios.put(
          `${baseURL}/api/update-collection/${id}`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        alert("Collection updated successfully!");
      } else {
        // CREATE API
        res = await axios.post(
          `${baseURL}/api/add-collection`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        alert("Collection added successfully!");
      }

      navigate("/collection-table");
      
      // Reset form
      setFormData({
        collectionType: "",
        category: "",
        productName: "",
        description: "",
        images: [],
      });
      setExistingImages([]);
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
      setPreviewUrls([]);

      if (inputRef.current) inputRef.current.value = "";

    } catch (err) {
      console.error(err);
      alert(`Failed to ${isEditMode ? "update" : "add"} collection!`);
    } finally {
      setLoading(false);
    }
  };

  // cleanup URLs
  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 md:px-16">
        <h1 className="text-3xl font-semibold mb-6">
          {isEditMode ? "Edit Collection" : "Add New Collection"}
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* COLLECTION TYPE */}
            <div>
              <label className="font-medium">Collection Type</label>
              <select
                name="collectionType"
                value={formData.collectionType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    collectionType: e.target.value,
                    category: "",
                  })
                }
                className="w-full border rounded px-3 py-2 mt-1"
              >
                <option value="">Select</option>
                {collectionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* CATEGORY */}
            <div>
              <label className="font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                disabled={!formData.collectionType}
              >
                <option value="">Select</option>
                {formData.collectionType &&
                  categoryOptions[formData.collectionType].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </select>
            </div>

            {/* PRODUCT NAME + IMAGE UPLOAD IN SAME ROW */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PRODUCT NAME */}
              <div>
                <label className="font-medium">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="w-full border rounded px-3 py-2 mt-1"
                  onChange={handleChange}
                  value={formData.productName}
                />
              </div>

              {/* IMAGE UPLOAD INPUT FIELD (beside product name) */}
              <div>
                <label className="font-medium">Images (Multiple)</label>

                <div className="relative mt-1">
                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />

                  <div
                    onClick={() => inputRef.current?.click()}
                    className="w-full border rounded px-3 py-2 pr-24 bg-white cursor-pointer text-gray-500"
                  >
                    Click to choose files…
                  </div>

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 bg-white px-1 pointer-events-none">
                    {formData.images.length} selected
                  </span>
                </div>
              </div>
            </div>

            {/* EXISTING IMAGES PREVIEW (Edit Mode Only) */}
            {isEditMode && existingImages.length > 0 && (
              <div className="md:col-span-2">
                <label className="font-medium">Existing Images (Click × to remove)</label>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-1 mt-2">
                  {existingImages.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow border bg-gray-50"
                    >
                      <button
                        type="button"
                        onClick={() => removeExistingImage(index)}
                        className="absolute -top-1 -right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center"
                      >
                        ✕
                      </button>
                      <img 
                        src={`${baseURL}/uploads/${src}`} 
                        className="w-full h-full object-cover" 
                        alt={`Existing ${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEW IMAGES PREVIEW */}
            {previewUrls.length > 0 && (
              <div className="md:col-span-2">
                <label className="font-medium">New Images</label>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-1 mt-2">
                  {previewUrls.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow border bg-gray-50"
                    >
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-1 -right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center"
                      >
                        ✕
                      </button>
                      <img src={src} className="w-full h-full object-cover" alt={`New ${index}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DESCRIPTION */}
            <div className="md:col-span-2">
              <label className="font-medium">Description</label>
              <textarea
                name="description"
                rows={3}
                className="w-full border rounded px-3 py-2 mt-1"
                onChange={handleChange}
                value={formData.description}
              ></textarea>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 mt-8">
            <button 
              className="px-4 py-2 border rounded" 
              onClick={() => window.history.back()}
              disabled={loading}
            >
              Cancel
            </button>

            <button 
              onClick={handleSubmit} 
              disabled={loading}
              className="px-6 py-2 bg-[#850E35] text-white rounded shadow disabled:opacity-50"
            >
              {loading ? "Saving..." : (isEditMode ? "Update Collection" : "Save Collection")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCollection;