import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
import Header from "./components/Header";

const App = () => {
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setEnteredContent(e.target.value);
  };

  return (
    <main>
      {modalIsVisible && (
        <Modal
          onModalVisibility={toggleModalHandler}
          modalIsVisible={modalIsVisible}
        >
          <PostForm
            onContentChange={contentChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <div className="container">
        <Header onModalVisibility={toggleModalHandler} />
        <PostList
          enteredAuthor={enteredAuthor}
          enteredContent={enteredContent}
        />
      </div>
    </main>
  );
};

export default App;
