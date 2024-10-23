import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";

export default function AuthorDetails() {
  const { authorName } = useParams(); // Get the author name from the URL
  const [authorDetails, setAuthorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]); // Mocked list of books

  useEffect(() => {
    getAuthorDetails();
    getAuthorBooks();
  }, [authorName]);

  // Fetch author details (mocked data)
  async function getAuthorDetails() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?inc=name,picture&seed=${authorName}`
      );
      setAuthorDetails(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching author details:", error);
    } finally {
      setLoading(false);
    }
  }

  // Mock fetching books for an author
  async function getAuthorBooks() {
    // Here you can replace this with a real API call to fetch books for the author
    setBooks([
      { id: 1, title: "Sample Book 1" },
      { id: 2, title: "Sample Book 2" },
      { id: 3, title: "Sample Book 3" },
    ]);
  }

  if (loading) return <Loading />;

  return (
    <div className="container mt-5">
      {authorDetails && (
        <>
          <div className="text-center">
            <img
              className="rounded-circle"
              src={authorDetails.picture.large}
              alt={`${authorDetails.name.first} ${authorDetails.name.last}`}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1 className="mt-3">
              {authorDetails.name.first} {authorDetails.name.last}
            </h1>
          </div>

          <h3 className="mt-5">Books by {authorDetails.name.first}:</h3>
          <ul>
            {books.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
