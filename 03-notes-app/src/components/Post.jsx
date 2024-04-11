const Post = ({ author, content }) => {
  return (
    <li className="card">
      <h5>{author}</h5>
      <hr />
      <p>{content}</p>
    </li>
  );
};

export default Post;
