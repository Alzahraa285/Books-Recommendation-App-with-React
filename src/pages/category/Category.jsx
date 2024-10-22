import React, { useState } from "react";
import axios from "axios";
import BookList from "./BookList";

const Category = ({ categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`);

    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: `subject:${category}`,
            key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
            maxResults: 10,
          },
        }
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to fetch books. Please try again later.");
      setBooks([]); // Reset books on error
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Suggestion Categories</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
        {categories.map((category, index) => (
          <div className="col" key={index}>
            <button
              className={`btn w-100 py-2 ${
                selectedCategory === category ? "btn-success" : "btn-dark"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          {error}
        </div>
      )}

      {selectedCategory && (
        <div className="mt-4">
          <h3 className="mb-4">Books in {selectedCategory}:</h3>
          <BookList books={books} />
        </div>
      )}
    </div>
  );
};

export default Category;
