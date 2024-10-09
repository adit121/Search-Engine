import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // Use Routes and Navigate instead of Switch and Redirect
import { Results } from './Results';

export const AppRoutes = () => (  // Renamed to AppRoutes for clarity
  <div className="p-4">
    <Routes>  {/* Use Routes instead of Switch */}
      {/* Redirect from "/" to "/search" */}
      <Route path="/" element={<Navigate to="/search" />} />

      {/* Define paths for search, images, news, and videos */}
      <Route path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </Routes>
  </div>
);
