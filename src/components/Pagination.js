import React from "react";

function Pagination({ totalPosts, cardsPerPage, page, setPage }) {
  const totalPages = Math.ceil(totalPosts / cardsPerPage);

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button key={index} onClick={() => setPage(index + 1)}>
          {index + 1}
        </button>
      ))}

      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;