import React, { useEffect, useState } from 'react';
import ImageGallery from "../components/ImageGallery";

const ViewImageGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=programming&per_page=100000', {
          headers: {
            Authorization: 'v6E1lspZrdVL7qe03pIpR1tfYS0scUDOd4CFPlOWbIS0J9JdHvVmMhrG',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPhotos(data.photos); 
      } catch (error) {
        console.error('Error fetching photos from Pexels API', error);
        // Optionally handle error state or show error message
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <ImageGallery photos={photos} />
      </div>
    </div>
  );
};

export default ViewImageGallery;
