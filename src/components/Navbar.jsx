import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchInput.value.trim();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          MyLogo
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-1 mx-4 max-w-lg">
          <input
            type="text"
            name="searchInput"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {/* Sign In / Sign Up */}
        <div className="flex space-x-4">
          <Link to="/signin" className="text-white hover:underline">
            Sign In
          </Link>
          <Link to="/signup" className="text-white hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
