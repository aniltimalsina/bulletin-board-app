import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);

  const handleSave = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <section>Add a new Post</section>
      <form>
        <label htmlFor="posttitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitle}
        />

        <label htmlFor="postContent"> Post Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          cols="30"
          rows="10"
          value={content}
          onChange={handleContent}
        ></textarea>
        <button type="button" onClick={handleSave}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
