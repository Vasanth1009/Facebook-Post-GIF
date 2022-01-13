import { useState } from 'react';

import { FaVideo, BsFileImage, BsEmojiSunglasses } from '../constants/icons';
import Modal from './Modal';
import Logo from '../assets/logo.ico';

const CreatePost = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="create-post">
      <div className="create-post-top ">
        <img src={Logo} alt="Logo" />
        <div onClick={() => setIsShown(true)}>
          What's on your mind, Facebook?
        </div>
      </div>
      <div className="create-post-bottom">
        <div className="button">
          <FaVideo fill="#e63946" />
          <span>Live Video</span>
        </div>
        <div className="button">
          <BsFileImage color="#76c893" />
          <span>Photo/Video</span>
        </div>
        <div className="button">
          <BsEmojiSunglasses color="#fcbf49" />
          <span>Feeling/Activity</span>
        </div>
      </div>
      <Modal isShown={isShown} setIsShown={setIsShown} />
    </div>
  );
};

export default CreatePost;
