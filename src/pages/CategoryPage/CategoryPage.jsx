import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../category/Category";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const subjects = [
          "fiction",
          "nonfiction",
          "science",
          "history",
          "biography",
        ];
        const allCategories = new Set();

        for (const subject of subjects) {
          const response = await axios.get(
            "https://www.googleapis.com/books/v1/volumes",
            {
              params: {
                q: `subject:${subject}`,
                key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
                maxResults: 10,
              },
            }
          );
          response.data.items.forEach((item) => {
            if (item.volumeInfo.categories) {
              item.volumeInfo.categories.forEach((category) => {
                allCategories.add(category);
              });
            }
          });
        }

        const sortedCategories = Array.from(allCategories).sort();
        setCategories(sortedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  return (
    <section>
      {error ? (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      ) : (
        <Category categories={categories} />
      )}
    </section>
  );
}
