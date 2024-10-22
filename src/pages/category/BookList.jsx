import React from "react";

const BookList = ({ books = [] }) => {
  if (!books || books.length === 0) {
    return (
      <div className="text-center p-4">
        <p className="text-muted">No books found</p>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {books.map((book, index) => {
        if (!book?.volumeInfo) {
          return null;
        }

        const { volumeInfo } = book;
        const thumbnail =
          volumeInfo.imageLinks?.thumbnail || "/api/placeholder/128/192";
        const authors = volumeInfo.authors?.join(", ") || "Unknown Author";
        const description =
          volumeInfo.description || "No description available";

        return (
          <div key={index} className="col ">
            <div className="card h-100 shadow-sm overview">
              <div className="card-body">
                <div className="d-flex gap-3 mb-3">
                  <img
                    src={thumbnail}
                    alt={`Cover of ${volumeInfo.title}`}
                    className="img-fluid rounded shadow-sm"
                    style={{
                      width: "128px",
                      height: "192px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className=" ">
                      {volumeInfo.title || "Untitled"}
                    </h6>
                    <p className="card-subtitle mb-2 text-muted">
                      By {authors}
                    </p>
                  </div>
                </div>

                <p
                  className="card-text small text-muted"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "4",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {description}
                </p>

                <div className="mt-3">
                  {volumeInfo.publishedDate && (
                    <p className="small mb-1">
                      <strong>Published:</strong> {volumeInfo.publishedDate}
                    </p>
                  )}
                  {volumeInfo.pageCount && (
                    <p className="small mb-1">
                      <strong>Pages:</strong> {volumeInfo.pageCount}
                    </p>
                  )}
                  {volumeInfo.categories &&
                    volumeInfo.categories.length > 0 && (
                      <p className="small mb-1">
                        <strong>Categories:</strong>{" "}
                        {volumeInfo.categories.join(", ")}
                      </p>
                    )}
                </div>
              </div>

              {volumeInfo.previewLink && (
                <div className="card-footer bg-transparent">
                  <a
                    href={volumeInfo.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link btn-sm p-0 text-decoration-none"
                  >
                    Preview on Google Books →
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
