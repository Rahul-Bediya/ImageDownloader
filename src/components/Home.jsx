// // src/components/Home.js
// import axios from 'axios';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';

// const API_URL = 'https://api.unsplash.com/search/photos';
// const IMAGES_PER_PAGE = 20;

// function Home() {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchImages = useCallback(async () => {
//     try {
//       if (searchInput.current.value) {
//         setErrorMsg('');
//         setLoading(true);
//         const { data } = await axios.get(
//       `${API_URL}?query=${
//         searchInput.current.value}&page=${page}&per_page=${
//         IMAGES_PER_PAGE}&client_id=${import.meta.env.UNPLASE_API_KEY}`);
//         setImages(data.results);
//         setTotalPages(data.total_pages);
//         setLoading(false);
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching images. Try again later.');
//       console.log(error);
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);

//   const resetSearch = () => {
//     setPage(1);
//     fetchImages();
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     resetSearch();
//   };

//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     resetSearch();
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       <h1 className='text-3xl font-bold text-center mb-8'>Image Search</h1>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
//       <div className='text-center mb-6'>
//         <form onSubmit={handleSearch} className='max-w-xl mx-auto'>
//           <input
//             type='search'
//             placeholder='Type something to search...'
//             className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//             ref={searchInput}
//           />
//         </form>
//       </div>
//       <div className='flex justify-center space-x-4 mb-6'>
//         {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
//           <div
//             key={filter}
//             className='cursor-pointer text-blue-600 hover:underline'
//             onClick={() => handleSelection(filter)}
//           >
//             {filter}
//           </div>
//         ))}
//       </div>
//       {loading ? (
//         <p className='text-center'>Loading...</p>
//       ) : (
//         <>
//           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//             {images.map((image) => (
//               <div key={image.id} className='relative'>
//                 <Link to={`/image/${image.id}`}>
//                   <img
//                     src={image.urls.small}
//                     alt={image.alt_description}
//                     className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105'
//                   />
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <div className='flex justify-center space-x-4 mt-6'>
//             {page > 1 && (
//               <button
//                 onClick={() => setPage(page - 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Previous
//               </button>
//             )}
//             {page < totalPages && (
//               <button
//                 onClick={() => setPage(page + 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;


// import axios from 'axios';
// import { useCallback, useEffect, useRef, useState } from 'react';
// // import { Button, Form } from 'react-bootstrap';

// const API_URL = 'https://api.unsplash.com/search/photos';
// const IMAGES_PER_PAGE = 20;

// function Home() {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchImages = useCallback(async () => {
//     try {
//       if (searchInput.current.value) {
//         setErrorMsg('');
//         setLoading(true);
//         const { data } = await axios.get(
//           `${API_URL}?query=${
//             searchInput.current.value
//           }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
//             import.meta.env.VITE_API_KEY
//           }`
//         );
//         setImages(data.results);
//         setTotalPages(data.total_pages);
//         setLoading(false);
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching images. Try again later.');
//       console.log(error);
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);

//   const resetSearch = () => {
//     setPage(1);
//     fetchImages();
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     resetSearch();
//   };

//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     resetSearch();
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       <h1 className='text-3xl font-bold text-center mb-8'>Image Search</h1>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      
//       <div className='text-center mb-6'>
//         <form onSubmit={handleSearch} className='max-w-xl mx-auto'>
//           <input
//             type='search'
//             placeholder='Type something to search...'
//             className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//             ref={searchInput}
//           />
//         </form>
//       </div>
      
//       <div className='flex justify-center space-x-4 mb-6'>
//         {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
//           <div
//             key={filter}
//             className='cursor-pointer text-blue-600 hover:underline'
//             onClick={() => handleSelection(filter)}
//           >
//             {filter}
//           </div>
//         ))}
//       </div>
      
//       {loading ? (
//         <p className='text-center'>Loading...</p>
//       ) : (
//         <>
//           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//             {images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.urls.small}
//                 alt={image.alt_description}
//                 className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105'
//               />
//             ))}
//           </div>

          
//           <div className='flex justify-center space-x-4 mt-6'>
//             {page > 1 && (
//               <button
//                 onClick={() => setPage(page - 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Previous
//               </button>
//             )}
//             {page < totalPages && (
//               <button
//                 onClick={() => setPage(page + 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;




// import axios from 'axios';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const API_URL = 'https://api.unsplash.com/search/photos';
// const IMAGES_PER_PAGE = 20;

// function Home() {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchImages = useCallback(async () => {
//     try {
//       if (searchInput.current.value) {
//         setErrorMsg('');
//         setLoading(true);
//         const { data } = await axios.get(
//           `${API_URL}?query=${
//             searchInput.current.value
//           }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
//             import.meta.env.VITE_API_KEY
//           }`
//         );
//         setImages(data.results);
//         setTotalPages(data.total_pages);
//         setLoading(false);
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching images. Try again later.');
//       console.log(error);
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);

//   const resetSearch = () => {
//     setPage(1);
//     fetchImages();
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     resetSearch();
//   };

//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     resetSearch();
//   };

//   const handleImageClick = (imageId) => {
//     // Navigate to a new route with image details and download options
//     // For demonstration, let's assume the route is '/image/:id'
//     // Replace this with your actual route configuration
//     window.location.href = `/image/${imageId}`;
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       <h1 className='text-3xl font-bold text-center mb-8'>Image Search</h1>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      
//       <div className='text-center mb-6'>
//         <form onSubmit={handleSearch} className='max-w-xl mx-auto'>
//           <input
//             type='search'
//             placeholder='Type something to search...'
//             className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//             ref={searchInput}
//           />
//         </form>
//       </div>
      
//       <div className='flex justify-center space-x-4 mb-6'>
//         {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
//           <div
//             key={filter}
//             className='cursor-pointer text-blue-600 hover:underline'
//             onClick={() => handleSelection(filter)}
//           >
//             {filter}
//           </div>
//         ))}
//       </div>
      
//       {loading ? (
//         <p className='text-center'>Loading...</p>
//       ) : (
//         <>
//           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//             {images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.urls.small}
//                 alt={image.alt_description}
//                 className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer'
//                 onClick={() => handleImageClick(image.id)}
//               />
//             ))}
//           </div>

          
//           <div className='flex justify-center space-x-4 mt-6'>
//             {page > 1 && (
//               <button
//                 onClick={() => setPage(page - 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Previous
//               </button>
//             )}
//             {page < totalPages && (
//               <button
//                 onClick={() => setPage(page + 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // export default Home;
// import axios from 'axios';
// import { useCallback, useEffect, useRef, useState } from 'react';

// const API_URL = 'https://api.unsplash.com/search/photos';
// const IMAGES_PER_PAGE = 20;

// function Home() {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to fetch images
//   const fetchImages = useCallback(async (query, pageNumber) => {
//     try {
//       setErrorMsg('');
//       setLoading(true);
//       const { data } = await axios.get(
//         `${API_URL}?query=${query}&page=${pageNumber}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
//       );
//       setImages(data.results);
//       setTotalPages(data.total_pages);
//       setLoading(false);
//     } catch (error) {
//       setErrorMsg('Error fetching images. Try again later.');
//       console.log(error);
//       setLoading(false);
//     }
//   }, []);

//   // Fetch initial images when component mounts or when query changes
//   useEffect(() => {
//     if (searchInput.current.value) {
//       fetchImages(searchInput.current.value, page);
//     }
//   }, [fetchImages, page]);

//   // Reset search and fetch new images on search
//   const handleSearch = (event) => {
//     event.preventDefault();
//     setPage(1); // Reset page number to 1 when searching
//     fetchImages(searchInput.current.value, 1); // Fetch images with search query and page 1
//   };

//   // Handle click on selection (for predefined filters)
//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     handleSearch({ preventDefault: () => {} }); // Trigger search with selected filter
//   };

//   // Handle next page button click
//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1); // Increment page number if there are more pages
//     }
//   };

//   // Handle previous page button click
//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(page - 1); // Decrement page number if not on the first page
//     }
//   };

//   // Function to handle click on an image
//   const handleImageClick = (imageUrl) => {
//     window.open(imageUrl, '_blank'); // Open the image URL in a new tab
//     // You can also add more logic here such as downloading the image
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       <h1 className='text-3xl font-bold text-center mb-8'>Image Search</h1>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      
//       <div className='text-center mb-6'>
//         <form onSubmit={handleSearch} className='max-w-xl mx-auto'>
//           <input
//             type='search'
//             placeholder='Type something to search...'
//             className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//             ref={searchInput}
//           />
//         </form>
//       </div>
      
//       <div className='flex justify-center space-x-4 mb-6'>
//         {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
//           <div
//             key={filter}
//             className='cursor-pointer text-blue-600 hover:underline'
//             onClick={() => handleSelection(filter)}
//           >
//             {filter}
//           </div>
//         ))}
//       </div>
      
//       {loading ? (
//         <p className='text-center'>Loading...</p>
//       ) : (
//         <>
//           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//             {images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.urls.small}
//                 alt={image.alt_description}
//                 className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer'
//                 onClick={() => handleImageClick(image.urls.regular)} // Pass the regular size image URL
//               />
//             ))}
//           </div>

          
//           <div className='flex justify-center space-x-4 mt-6'>
//             {page > 1 && (
//               <button
//                 onClick={handlePreviousPage}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Previous
//               </button>
//             )}
//             {page < totalPages && (
//               <button
//                 onClick={handleNextPage}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;

// import axios from 'axios';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const API_URL = 'https://api.unsplash.com/search/photos';
// const IMAGES_PER_PAGE = 20;

// const Home = () => {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchImages = useCallback(async () => {
//     try {
//       if (searchInput.current.value) {
//         setErrorMsg('');
//         setLoading(true);
//         const { data } = await axios.get(
//           `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
//         );
//         setImages(data.results);
//         setTotalPages(data.total_pages);
//         setLoading(false);
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching images. Try again later.');
//       console.log(error);
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);

//   const resetSearch = () => {
//     setPage(1);
//     fetchImages();
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     resetSearch();
//   };

//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     resetSearch();
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       <h1 className='text-3xl font-bold text-center mb-8'>Image Search</h1>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      
//       <div className='text-center mb-6'>
//         <form onSubmit={handleSearch} className='max-w-xl mx-auto'>
//           <input
//             type='search'
//             placeholder='Type something to search...'
//             className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//             ref={searchInput}
//           />
//         </form>
//       </div>
      
//       <div className='flex justify-center space-x-4 mb-6'>
//         {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
//           <div
//             key={filter}
//             className='cursor-pointer text-blue-600 hover:underline'
//             onClick={() => handleSelection(filter)}
//           >
//             {filter}
//           </div>
//         ))}
//       </div>
      
//       {loading ? (
//         <p className='text-center'>Loading...</p>
//       ) : (
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//           {images.map((image) => (
//             <Link key={image.id} to={`/image/${image.id}`} className='w-full h-auto'>
//               <img
//                 src={image.urls.small}
//                 alt={image.alt_description}
//                 className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer'
//               />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// import axios from 'axios';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';

// const API_URL = 'https://api.unsplash.com/search/photos';
// const IMAGES_PER_PAGE = 20;

// const Home = () => {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [currentQuery, setCurrentQuery] = useState('technology'); // State to hold the current query

//   // Fetch images function with query and pageNumber parameters
//   const fetchImages = useCallback(async (query, pageNumber) => {
//     try {
//       setErrorMsg('');
//       setLoading(true);
//       const { data } = await axios.get(
//         `${API_URL}?query=${query}&page=${pageNumber}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
//       );
//       setImages(data.results);
//       setTotalPages(data.total_pages);
//       setLoading(false);
//     } catch (error) {
//       setErrorMsg('Error fetching images. Try again later.');
//       console.log(error);
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchImages(currentQuery, page); // Use currentQuery state for initial and subsequent fetches
//   }, [fetchImages, currentQuery, page]);

//   const resetSearch = () => {
//     setPage(1);
//     const query = searchInput.current.value.trim();
//     setCurrentQuery(query); // Update currentQuery state
//     fetchImages(query, 1); // Fetch images for the new query and reset to page 1
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     resetSearch();
//   };

//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     resetSearch();
//   };

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       <h1 className='text-3xl font-bold text-center mb-8'>Image Search</h1>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      
//       <div className='text-center mb-6'>
//         <form onSubmit={handleSearch} className='max-w-xl mx-auto'>
//           <input
//             type='search'
//             placeholder='Type something to search...'
//             className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//             ref={searchInput}
//           />
//         </form>
//       </div>
      
//       <div className='flex justify-center space-x-4 mb-6'>
//         {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
//           <div
//             key={filter}
//             className='cursor-pointer text-blue-600 hover:underline'
//             onClick={() => handleSelection(filter)}
//           >
//             {filter}
//           </div>
//         ))}
//       </div>
      
//       {loading ? (
//         <p className='text-center'>Loading...</p>
//       ) : (
//         <>
//           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
//             {images.map((image) => (
//               <Link key={image.id} to={`/image/${image.id}`} className='w-full h-auto'>
//                 <img
//                   src={image.urls.small}
//                   alt={image.alt_description}
//                   className='w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer'
//                 />
//               </Link>
//             ))}
//           </div>

//           <div className='flex justify-center space-x-4 mt-6'>
//             {page > 1 && (
//               <button
//                 onClick={() => handlePageChange(page - 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Previous
//               </button>
//             )}
//             {page < totalPages && (
//               <button
//                 onClick={() => handlePageChange(page + 1)}
//                 className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </>
//       )}
      
//     </div>
//   );
// };

// export default Home;

import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('technology');

  const location = useLocation();
  const navigate = useNavigate();

  // Function to fetch images from Unsplash API
  const fetchImages = useCallback(async (query, pageNumber) => {
    try {
      setErrorMsg('');
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}?query=${query}&page=${pageNumber}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      setImages((prevImages) =>
        pageNumber === 1 ? data.results : [...prevImages, ...data.results]
      );
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      setErrorMsg('Error fetching images. Try again later.');
      console.log(error);
      setLoading(false);
    }
  }, []);

  // Load images on component mount or when page/query changes
  useEffect(() => {
    if (location.state) {
      const { query, page, images } = location.state;
      setCurrentQuery(query);
      setPage(page);
      setImages(images);
    } else {
      fetchImages(currentQuery, page);
    }
  }, [fetchImages, location.state, currentQuery, page]);

  // Function to reset and fetch images based on the search query
  const resetSearch = (query) => {
    setPage(1);
    setCurrentQuery(query);
    fetchImages(query, 1);
  };

  // Function to handle preset selections
  const handleSelection = (selection) => {
    resetSearch(selection);
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Navbar onSearch={resetSearch} /> {/* Include Navbar and pass the resetSearch function */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Image Search</h1>
        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}

        {/* Preset filters */}
        <div className="flex justify-center space-x-4 mb-6">
          {['nature', 'birds', 'cats', 'shoes'].map((filter) => (
            <div
              key={filter}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => handleSelection(filter)}
            >
              {filter}
            </div>
          ))}
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            {/* Display images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((image) => (
                <Link
                  key={image.id}
                  to={`/image/${image.id}`}
                  state={{ query: currentQuery, page, images }}
                  className="w-full h-auto"
                >
                  <img
                    src={image.urls.small}
                    alt={image.alt_description}
                    className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                  />
                </Link>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center space-x-4 mt-6">
              {page > 1 && (
                <button
                  onClick={() => handlePageChange(page - 1)}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => handlePageChange(page + 1)}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
