// // import ImageCard from "./ImageCard"

// // function Gallery({ images, deleteImage, collections, addToCollection }) {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //       {images.map((image) => (
// //         <ImageCard
// //           key={image.id}
// //           image={image}
// //           deleteImage={deleteImage}
// //           collections={collections}
// //           addToCollection={addToCollection}
// //         />
// //       ))}
// //     </div>
// //   )
// // }

// // export default Gallery

// import ImageCard from "./ImageCard";

// function Gallery({ images, deleteImage, collections, addToCollection }) {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//         Image Gallery
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <ImageCard
//               image={image}
//               deleteImage={deleteImage}
//               collections={collections}
//               addToCollection={addToCollection}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;
import ImageCard from "./ImageCard";

function Gallery({ images, deleteImage, collections, addToCollection }) {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Image Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <ImageCard
              image={image}
              deleteImage={deleteImage}
              collections={collections}
              addToCollection={addToCollection}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
