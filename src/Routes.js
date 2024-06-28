import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import ViewCrudOperation from './views/ViewCrudOperation';
import ViewGuessTheNumber from './views/ViewGuessTheNumber';
import ViewImageGallery from './views/ViewImageGallery';
import ViewTodoList from './views/ViewTodoList';
import { RingLoader } from 'react-spinners';

const AppRoutes = () => {
  return (
    <Suspense fallback={<RingLoader color="#123abc" loading={true} size={150} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crud" element={<ViewCrudOperation />} />
        <Route path="/guessTheNumber" element={<ViewGuessTheNumber />} />
        <Route path="/ImageGallery" element={<ViewImageGallery />} />
        <Route path="/viewToDoList" element={<ViewTodoList />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
