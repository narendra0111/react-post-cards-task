import React from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../redux/postSlice";

function Card({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="card">

      <button
        className="delete"
        onClick={() => dispatch(removePost(post.id))}
      >
        ✕
      </button>

      <h3 className="title">{post.title}</h3>

      <p className="body">
        {post.body.substring(0, 80)}...
      </p>

      <p className="date">Mon, 21 Dec 2020 14:57 GMT</p>

      <img
        src={`https://picsum.photos/300/160?random=${post.id}`}
        alt="post"
      />

    </div>
  );
}

export default Card;