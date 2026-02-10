import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../AdminNavbar";
import { baseURL } from "@/Api/Baseurl";

interface Collection {
  id: number;
  collectionType: string;
  category: string;
  subCategory: string;
  productName: string;
  color: string;
  size: string;
  description: string;
  images: string[];
}

const CollectionView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    fetch(`${baseURL}/api/getbyid/${id}`)
      .then((res) => res.json())
      .then((data) => setCollection(data))
      .catch((err) => console.log("Fetch Error:", err));
  }, [id]);

  if (!collection) {
    return (
      <div className="pt-40 text-center text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 md:px-16 max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-700 text-white rounded-md shadow hover:bg-gray-800"
        >
          ← Back
        </button>

        {/* Main Container */}
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow">

          {/* Title */}
          <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            {collection.productName}
          </h1>

          {/* ---------------- IMAGE GALLERY ---------------- */}
   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
  {collection.images?.map((img, index) => (
    <div
      key={index}
      className="relative w-full aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-300 dark:border-neutral-700"
    >
      <img
        src={`${baseURL}/uploads/${img}`}
        alt="collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  ))}
</div>



          {/* ---------------- DETAILS SECTION ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Collection Type</p>
              <p className="text-base font-medium">{collection.collectionType}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
              <p className="text-base font-medium">{collection.category}</p>
            </div>

            {/* <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Color</p>
              <p className="text-base font-medium">{collection.color}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Size</p>
              <p className="text-base font-medium">{collection.size}</p>
            </div> */}
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Description</p>
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
              {collection.description}
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default CollectionView;
