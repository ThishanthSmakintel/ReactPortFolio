import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Typewriter({ text }) {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(text.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 100); // Adjust typing speed (milliseconds per character)

    return () => {
      clearTimeout(timer);
    };
  }, [text, currentIndex]);

  return (
    <Typography variant="body1" className="typewriter-text">
      {displayText}
    </Typography>
  );
}

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
          <Typography variant="h1" component="h1" className="mb-4">
            Thishanth
          </Typography>
          <Typewriter text="Web Developer | PHP, Node.js, React" />
          <Typography variant="body1">
            I have over 1 year of programming experience, with expertise in web development using PHP (Laravel), Node.js, and React. Explore my portfolio and projects to learn more about my work.
          </Typography>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <Link to="/crud" className="text-decoration-none">
            <div className="card">
              <div className="card-body">
                <Typography variant="h5" component="h5" className="card-title">
                  CRUD Operations
                </Typography>
                <Typography variant="body1" className="card-text">
                  Perform CRUD operations with this project.
                </Typography>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <Link to="/guessTheNumber" className="text-decoration-none">
            <div className="card">
              <div className="card-body">
                <Typography variant="h5" component="h5" className="card-title">
                  Guess The Number
                </Typography>
                <Typography variant="body1" className="card-text">
                  Play the Guess The Number game.
                </Typography>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <Link to="/imageGallery" className="text-decoration-none">
            <div className="card">
              <div className="card-body">
                <Typography variant="h5" component="h5" className="card-title">
                  Image Gallery
                </Typography>
                <Typography variant="body1" className="card-text">
                  View technology-related images.
                </Typography>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
