import React from 'react';
import styles from './ImageGallery.module.css'; 

const ImageGallery = ({ photos }) => {
  return (
    <div className={`container mt-3 ${styles.galleryContainer}`}>
      <div className="text-center my-4">
        <small className="text-muted">
          Powered By <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels API</a>
        </small>
      </div>
      <div className="row">
        {photos.map(photo => (
          <div key={photo.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.galleryCard}`}>
              <img
                src={photo.src.medium}
                className={`card-img-top ${styles.galleryImage}`}
                alt={photo.alt}
              />
              <div className="card-body">
                <h5 className="card-title">{photo.alt}</h5>
                <p className="card-text">Photographer: {photo.photographer}</p>
                <p className="card-text">Average Color: {photo.avg_color}</p>
                <a
                  href={photo.photographer_url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Photographer
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ImageGallery;
