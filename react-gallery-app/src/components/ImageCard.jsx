
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Trash2, Plus } from "lucide-react";

function ImageCard({ image, deleteImage, collections, addToCollection }) {
  const [selectedCollection, setSelectedCollection] = useState("");

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = image.url;
    const extension = image.url.split(".").pop().split("?")[0] || "jpg";
    link.download = `image-${image.id}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [image.url, image.id]);

  const handleAddToCollection = useCallback(() => {
    if (selectedCollection) {
      addToCollection(image.id, selectedCollection);
      setSelectedCollection("");
    }
  }, [selectedCollection, addToCollection, image.id]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-2xl border border-gray-200 transition-transform duration-300 flex flex-col p-4 md:flex-row md:items-center md:gap-6"
    >
      {/* Image Container */}
      <div className="w-full h-48 md:w-[50%] md:max-w-[300px] md:h-40 lg:max-w-[350px] lg:h-[220px] mx-auto md:mx-0">
        <img
          src={image.url || "/placeholder.svg"}
          alt={image.name || "Gallery Image"}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 mt-4 md:mt-0 md:w-1/2">
        {/* Buttons (Delete & Download) */}
        <div className="flex justify-between">
          <button
            onClick={() => deleteImage(image.id)}
            className="text-red-500 hover:text-red-700 transition-colors duration-200 cursor-pointer"
            aria-label="Delete Image"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={handleDownload}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
            aria-label="Download Image"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Collection Dropdown & Add Button */}
        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
          <select
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
            className="border p-2 rounded-md flex-grow bg-gray-100 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option value="">Select Collection</option>
            {collections.map((collection) => (
              <option key={collection} value={collection}>{collection}</option>
            ))}
          </select>
          <button
            onClick={handleAddToCollection}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center gap-2 text-sm w-full md:w-auto"
            aria-label="Add to Collection"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ImageCard;
