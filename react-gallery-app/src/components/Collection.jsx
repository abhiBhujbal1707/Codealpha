
// import { useState } from "react";

// function Collections({ collections, addCollection, gallery }) {
//   const [newCollection, setNewCollection] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newCollection.trim()) {
//       addCollection(newCollection.trim());
//       setNewCollection("");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Collections</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
//         <input
//           type="text"
//           value={newCollection}
//           onChange={(e) => setNewCollection(e.target.value)}
//           placeholder="New collection name"
//           className="border p-2 flex-grow rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
//         >
//           Add
//         </button>
//       </form>
//       {Object.entries(collections).map(([name, imageIds]) => (
//         <div key={name} className="mb-6">
//           <h3 className="text-xl font-semibold mb-2 text-gray-700">{name}</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
//             {imageIds.map((id) => {
//               const image = gallery.find((img) => img.id === id);
//               return image ? (
//                 <img
//                   key={id}
//                   src={image.url || "/placeholder.svg"}
//                   alt="Collection"
//                   className="w-full h-24 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
//                 />
//               ) : null;
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Collections;
import { useState } from "react";

function Collections({ collections, addCollection, gallery }) {
  const [newCollection, setNewCollection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCollection.trim()) {
      addCollection(newCollection.trim());
      setNewCollection("");
    }
  };

  return (
    <div className="p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Collections</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap gap-2 mb-6">
        <div className="flex-grow">
          <input
            type="text"
            value={newCollection}
            onChange={(e) => setNewCollection(e.target.value)}
            placeholder="New collection name"
            className="border p-2 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 sm:w-auto w-full"
        >
          Add
        </button>
      </form>
      {Object.entries(collections).map(([name, imageIds]) => (
        <div key={name} className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">{name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {imageIds.map((id) => {
              const image = gallery.find((img) => img.id === id);
              return image ? (
                <img
                  key={id}
                  src={image.url || "/placeholder.svg"}
                  alt="Collection"
                  className="w-full h-24 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collections;
