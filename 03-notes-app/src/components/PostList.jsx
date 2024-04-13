import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <ul className="card-grid">
      {posts.length === 0 && <h1>No Posts to display</h1>}
      {posts.length > 0 &&
        posts.map((post) => (
          <Post key={post.author} author={post.author} content={post.content} />
        ))}
    </ul>
  );
};

export default PostList;
