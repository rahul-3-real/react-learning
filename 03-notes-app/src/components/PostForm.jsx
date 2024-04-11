const PostForm = ({ onAuthorChange, onContentChange }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          className="form-control"
          required
          onChange={onAuthorChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="3"
          className="form-control"
          required
          onChange={onContentChange}
        ></textarea>
      </div>
    </form>
  );
};

export default PostForm;
