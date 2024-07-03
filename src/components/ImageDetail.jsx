// src/components/ImageDetail.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

const API_URL = 'https://api.unsplash.com/photos';

const ImageDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/${id}?client_id=${import.meta.env.VITE_API_KEY}`
        );
        setImage(data);
      } catch (error) {
        setErrorMsg('Error fetching image details. Try again later.');
        console.log(error);
      }
    };

    fetchImage();
  }, [id]);

  const downloadImage = (url, filename) => {
    saveAs(url, filename);
  };

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      {image ? (
        <div className='text-center'>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className='mx-auto mb-6 rounded-lg shadow-md max-w-full h-auto'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className='text-xl mb-4'>{image.alt_description || 'Image Details'}</div>
          <p className='mb-4'>Choose a size to download:</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <button
              onClick={() => downloadImage(image.urls.full, `image-${image.id}-full.jpg`)}
              className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition mb-4'
            >
              Full Size
            </button>
            <button
              onClick={() => downloadImage(image.urls.regular, `image-${image.id}-regular.jpg`)}
              className='px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition mb-4'
            >
              Regular
            </button>
            <button
              onClick={() => downloadImage(image.urls.small, `image-${image.id}-small.jpg`)}
              className='px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition mb-4'
            >
              Small
            </button>
            <button
              onClick={() => downloadImage(image.urls.thumb, `image-${image.id}-thumb.jpg`)}
              className='px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition mb-4'
            >
              Thumbnail
            </button>
          </div>
          <div className='mt-6'>
            <Link to='/' className='text-blue-600 hover:underline'>
              Back to Search
            </Link>
          </div>
        </div>
      ) : (
        <p className='text-center'>Loading image details...</p>
      )}
    </div>
  );
};

export default ImageDetail;



// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { saveAs } from 'file-saver';

// const API_URL = 'https://api.unsplash.com/photos';

// const ImageDetail = () => {
//   const { id } = useParams();
//   const [image, setImage] = useState(null);
//   const [errorMsg, setErrorMsg] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const { data } = await axios.get(
//           `${API_URL}/${id}?client_id=${import.meta.env.VITE_API_KEY}`
//         );
//         setImage(data);
//       } catch (error) {
//         setErrorMsg('Error fetching image details. Try again later.');
//         console.log(error);
//       }
//     };

//     fetchImage();
//   }, [id]);

//   const downloadImage = (url, filename) => {
//     saveAs(url, filename);
//   };

//   return (
//     <div className='container mx-auto p-6'>
//       {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
//       {image ? (
//         <div className='text-center'>
//           <img
//             src={image.urls.regular}
//             alt={image.alt_description}
//             className='mx-auto mb-6 rounded-lg shadow-md max-w-full h-auto'
//           />
//           <div className='text-xl mb-4'>{image.alt_description || 'Image Details'}</div>
//           <p className='mb-4'>Choose a size to download:</p>
//           <div className='flex justify-center space-x-4'>
//             <button
//               onClick={() => downloadImage(image.urls.full, `image-${image.id}-full.jpg`)}
//               className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'
//             >
//               Full Size
//             </button>
//             <button
//               onClick={() => downloadImage(image.urls.regular, `image-${image.id}-regular.jpg`)}
//               className='px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition'
//             >
//               Regular
//             </button>
//             <button
//               onClick={() => downloadImage(image.urls.small, `image-${image.id}-small.jpg`)}
//               className='px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition'
//             >
//               Small
//             </button>
//             <button
//               onClick={() => downloadImage(image.urls.thumb, `image-${image.id}-thumb.jpg`)}
//               className='px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition'
//             >
//               Thumbnail
//             </button>
//           </div>
//           <div className='mt-6'>
//             <Link to='/' className='text-blue-600 hover:underline'>
//               Back to Search
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <p className='text-center'>Loading image details...</p>
//       )}
//     </div>
//   );
// };

// export default ImageDetail;
