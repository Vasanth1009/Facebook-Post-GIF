import { Dialog } from 'evergreen-ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import GifModal from './GifModal';
import { PostModal } from './PostModal';
import { addPost } from '../stores/post-action';

const Modal = ({ isShown, setIsShown }) => {
  const dispatch = useDispatch();

  const initialPost = {
    text: '',
    gifURL: '',
    likes: 0,
    comments: 0,
    share: 0,
  };

  const [gifModal, setGifModal] = useState(false);
  const [post, setPost] = useState(initialPost);

  const handlePost = () => {
    let newPost = {
      text: post.text,
      gitURL: post.gifURL,
      likes: Math.floor(Math.random() * 1000) + 1,
      comments: Math.floor(Math.random() * 200) + 1,
      shares: Math.floor(Math.random() * 50) + 1,
    };
    dispatch(addPost(newPost));
    setPost(initialPost);
    setIsShown(false);
    setGifModal(false);
  };

  const postModalProps = {
    post,
    setPost,
    setGifModal,
    handlePost,
    setIsShown,
  };

  return (
    <Dialog
      isShown={isShown}
      hasFooter={false}
      hasHeader={false}
      onCloseComplete={() => {
        setIsShown(false);
        setGifModal(false);
      }}
      width={480}
      preventBodyScrolling={true}
    >
      {gifModal ? (
        <GifModal setGifModal={setGifModal} setPost={setPost} />
      ) : (
        <PostModal postModalProps={postModalProps} />
      )}
    </Dialog>
  );
};

export default Modal;
