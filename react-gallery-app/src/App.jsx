
// // import { useState, useEffect } from "react"
// // // import ImageInput from "./components/ImageInput"
// // // import Gallery from "./components/Gallery"
// // // import Collections from "./components/Collections"
// // import ImageInput from "./components/ImageInput"
// // import Gallery from "./components/Gallery"
// // import Collections from "./components/Collection"
// // function App() {
// //   const [gallery, setGallery] = useState([])
// //   const [collections, setCollections] = useState({})

// //   useEffect(() => {
// //     const savedGallery = JSON.parse(localStorage.getItem("gallery")) || []
// //     const savedCollections = JSON.parse(localStorage.getItem("collections")) || {}
// //     setGallery(savedGallery)
// //     setCollections(savedCollections)
// //   }, [])

// //   useEffect(() => {
// //     localStorage.setItem("gallery", JSON.stringify(gallery))
// //     localStorage.setItem("collections", JSON.stringify(collections))
// //   }, [gallery, collections])

// //   const addImage = (url) => {
// //     setGallery([...gallery, { id: Date.now(), url }])
// //   }

// //   const deleteImage = (id) => {
// //     setGallery(gallery.filter((img) => img.id !== id))
// //     Object.keys(collections).forEach((collectionName) => {
// //       setCollections((prev) => ({
// //         ...prev,
// //         [collectionName]: prev[collectionName].filter((imgId) => imgId !== id),
// //       }))
// //     })
// //   }

// //   const addCollection = (name) => {
// //     if (!collections[name]) {
// //       setCollections({ ...collections, [name]: [] })
// //     }
// //   }

// //   const addToCollection = (imageId, collectionName) => {
// //     setCollections((prev) => ({
// //       ...prev,
// //       [collectionName]: [...prev[collectionName], imageId],
// //     }))
// //   }

// //   return (
// //     <div className="container mx-auto p-4">
// //       {/* <h1 className="bg-amber-950">Hello</h1> */}
// //       <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
// //       <ImageInput addImage={addImage} />
// //       <div className="flex mt-4">
// //         <div className="w-3/4 pr-4">
// //           <Gallery
// //             images={gallery}
// //             deleteImage={deleteImage}
// //             collections={Object.keys(collections)}
// //             addToCollection={addToCollection}
// //           />
// //         </div>
// //         <div className="w-1/4">
// //           <Collections collections={collections} addCollection={addCollection} gallery={gallery} />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App

// import { useState, useEffect } from "react";
// import ImageInput from "./components/ImageInput";
// import Gallery from "./components/Gallery";
// import Collections from "./components/Collection";

// function App() {
//   const [gallery, setGallery] = useState([]);
//   const [collections, setCollections] = useState({});

//   useEffect(() => {
//     const savedGallery = JSON.parse(localStorage.getItem("gallery")) || [];
//     const savedCollections = JSON.parse(localStorage.getItem("collections")) || {};
//     setGallery(savedGallery);
//     setCollections(savedCollections);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("gallery", JSON.stringify(gallery));
//     localStorage.setItem("collections", JSON.stringify(collections));
//   }, [gallery, collections]);

//   const addImage = (url) => {
//     setGallery([...gallery, { id: Date.now(), url }]);
//   };

//   const deleteImage = (id) => {
//     setGallery(gallery.filter((img) => img.id !== id));
//     Object.keys(collections).forEach((collectionName) => {
//       setCollections((prev) => ({
//         ...prev,
//         [collectionName]: prev[collectionName].filter((imgId) => imgId !== id),
//       }));
//     });
//   };

//   const addCollection = (name) => {
//     if (!collections[name]) {
//       setCollections({ ...collections, [name]: [] });
//     }
//   };

//   const addToCollection = (imageId, collectionName) => {
//     setCollections((prev) => ({
//       ...prev,
//       [collectionName]: [...prev[collectionName], imageId],
//     }));
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Image Gallery</h1>
//       <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//         <ImageInput addImage={addImage} />
//       </div>
//       <div className="flex gap-6">
//         <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
//           <Gallery
//             images={gallery}
//             deleteImage={deleteImage}
//             collections={Object.keys(collections)}
//             addToCollection={addToCollection}
//           />
//         </div>
//         <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
//           <Collections collections={collections} addCollection={addCollection} gallery={gallery} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import ImageInput from "./components/ImageInput";
import Gallery from "./components/Gallery";
import Collections from "./components/Collection";

function App() {
  const [gallery, setGallery] = useState([]);
  const [collections, setCollections] = useState({});

  useEffect(() => {
    const savedGallery = JSON.parse(localStorage.getItem("gallery")) || [];
    const savedCollections = JSON.parse(localStorage.getItem("collections")) || {};
    setGallery(savedGallery);
    setCollections(savedCollections);
  }, []);

  useEffect(() => {
    localStorage.setItem("gallery", JSON.stringify(gallery));
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [gallery, collections]);

  const addImage = (url) => {
    setGallery([...gallery, { id: Date.now(), url }]);
  };

  const deleteImage = (id) => {
    setGallery(gallery.filter((img) => img.id !== id));
    Object.keys(collections).forEach((collectionName) => {
      setCollections((prev) => ({
        ...prev,
        [collectionName]: prev[collectionName].filter((imgId) => imgId !== id),
      }));
    });
  };

  const addCollection = (name) => {
    if (!collections[name]) {
      setCollections({ ...collections, [name]: [] });
    }
  };

  const addToCollection = (imageId, collectionName) => {
    setCollections((prev) => ({
      ...prev,
      [collectionName]: [...prev[collectionName], imageId],
    }));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg max-w-7xl">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Image Gallery</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <ImageInput addImage={addImage} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-md">
          <Gallery
            images={gallery}
            deleteImage={deleteImage}
            collections={Object.keys(collections)}
            addToCollection={addToCollection}
          />
        </div>
        <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <Collections collections={collections} addCollection={addCollection} gallery={gallery} />
        </div>
      </div>
    </div>
  );
}

export default App;
