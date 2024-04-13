import { useState } from "react";

const PostForm = ({ handleModalClick, handleFormSave }) => {
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setEnteredContent(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const postData = {
      author: enteredAuthor,
      content: enteredContent,
    };
    handleFormSave(postData);
    handleModalClick();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          className="form-control"
          required
          onChange={authorChangeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="3"
          className="form-control"
          required
          onChange={contentChangeHandler}
        ></textarea>
      </div>
      <div className="btn-group">
        <button type="submit" className="button">
          Add Post
        </button>
        <button type="button" className="button-alt" onClick={handleModalClick}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostForm;
