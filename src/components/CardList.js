import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";
import Card from "./Card";

function CardList() {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [page, setPage] = useState(1);

  const cardsPerPage = 6;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const start = (page - 1) * cardsPerPage;
  const currentPosts = posts.slice(start, start + cardsPerPage);

  const totalPages = Math.ceil(posts.length / cardsPerPage);

  return (
    <div>

      <div className="grid">
        {currentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ‹
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          ›
        </button>

      </div>

    </div>
  );
}

export default CardList;