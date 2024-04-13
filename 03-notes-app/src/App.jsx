import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import Header from "./components/Header";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const modalBodyHandler = (e) => {
    e.stopPropagation();
  };

  const handleAddPost = (postData) => {
    fetch(`http://localhost:8000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/posts");
      const posts = await response.json();
      setPosts(posts.posts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <main>
      {modalIsVisible && (
        <Modal
          handleModalClick={toggleModalHandler}
          handleModalCancelClick={modalBodyHandler}
        >
          <PostForm
            handleModalClick={toggleModalHandler}
            handleFormSave={handleAddPost}
          />
        </Modal>
      )}
      <div className="container">
        <Header onModalVisibility={toggleModalHandler} />
        {isLoading && <h2>Loading Posts...</h2>}
        {!isLoading && <PostList posts={posts} />}
      </div>
    </main>
  );
};

export default App;
