import Post from "./Post";

const PostList = ({ enteredAuthor, enteredContent }) => {
  return (
    <ul className="card-grid">
      <Post author={enteredAuthor} content={enteredContent} />
      <Post
        author="Tomoya Okazaki, Clannad"
        content="What are you so hesitant about? It's your dream, isn't it? It's right in front of you, and you're wavering? You gotta be reckless and take whatever you can!"
      />
      <Post
        author="Monkey D. Luffy, One Piece"
        content="If you don't take risks, you can't create a future."
      />
      <Post
        author="Vegeta, Dragon Ball Z"
        content="Push through the pain. Giving up hurts more."
      />
      <Post
        author="Tanjiro Kamado, Demon Slayer"
        content="The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature."
      />
      <Post
        author="Naruto Uzumaki, Naruto"
        content="Hard work is worthless for those that don't believe in themselves."
      />
    </ul>
  );
};

export default PostList;
