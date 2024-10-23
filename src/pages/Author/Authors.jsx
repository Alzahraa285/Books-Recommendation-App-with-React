import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState(""); // Search input
  const [filteredAuthors, setFilteredAuthors] = useState([]); // Filtered authors based on search input
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [authorsPerPage] = useState(8); // Authors per page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAuthorsData();
  }, []);

  useEffect(() => {
    filterAuthors();
  }, [search, authors]);

  // Fetch all authors
  async function getAuthorsData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=50&nat=us&inc=name,picture`
      );
      setAuthors(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching authors:", error);
      setLoading(false);
    }
  }

  // Filter authors based on search input (starting letter)
  function filterAuthors() {
    if (search.trim() === "") {
      setFilteredAuthors(authors);
    } else {
      const filtered = authors.filter((author) =>
        author.name.first.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilteredAuthors(filtered);
    }
    setCurrentPage(1); // Reset to first page after search
  }

  // Get current authors for pagination
  const indexOfLastAuthor = currentPage * authorsPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
  const currentAuthors = filteredAuthors.slice(
    indexOfFirstAuthor,
    indexOfLastAuthor
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mb-5 mt-5 pb-5">
        <h2 className="text-center mb-5">Search Authors</h2>

        {/* Search Input */}
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search for authors by first letter..."
            className="form-control w-50 mx-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="row">
              {currentAuthors.length ? (
                currentAuthors.map((author, index) => (
                  <div key={index} className="col-md-3 my-5">
                    <Link
                      className="text-decoration-none"
                      to={`/author/${author.name.first}`}
                    >
                      {/* Circle View for Author's Profile Picture */}
                      <img
                        className="rounded-circle h-100 w-100"
                        src={author.picture.large}
                        alt={`${author.name.first} ${author.name.last}`}
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <h1
                        className="text-truncate h6 text-center mt-2 text-success"
                        data-toggle="tooltip"
                        title={`${author.name.first} ${author.name.last}`}
                      >
                        {author.name.first} {author.name.last}
                      </h1>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center">No authors found</p>
              )}
            </div>

            {/* Pagination */}
            {filteredAuthors.length > authorsPerPage && (
              <div className="pagination justify-content-center mt-4">
                {Array.from(
                  {
                    length: Math.ceil(filteredAuthors.length / authorsPerPage),
                  },
                  (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`btn btn-outline-primary mx-1 ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
