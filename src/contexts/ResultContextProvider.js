import React, { createContext, useContext, useState } from 'react';

// Create the context
const ResultContext = createContext();

// Create the provider component
export const ResultContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch results (you can modify this logic based on your API)
  const getResults = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Provide state and functions to children components
  return (
    <ResultContext.Provider value={{ searchTerm, setSearchTerm, results, loading, getResults }}>
      {children}
    </ResultContext.Provider>
  );
};

// Custom hook to use the context
export const useResultContext = () => useContext(ResultContext);
