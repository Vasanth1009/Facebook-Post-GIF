import Tooltip from '@material-ui/core/Tooltip';
import { Button } from 'evergreen-ui';

import {
  CgClose,
  FaUserFriends,
  FaCaretDown,
  FaRegSmile,
  BsFileImage,
  FaUserTag,
  BsEmojiLaughing,
  IoLocationSharp,
  BsFillFlagFill,
  AiOutlineGif,
  FaVideo,
} from '../constants/icons';
import Logo from '../assets/logo.ico';
import TextColor from '../assets/text-color.png';

export const PostModal = ({ postModalProps }) => {
  const { post, setPost, setGifModal, handlePost, setIsShown } = postModalProps;

  return (
    <div>
      <div className="modal-header">
        <h3>Create post</h3>
        <CgClose
          color="#6c757d"
          className="close-icon"
          onClick={() => {
            setIsShown(false);
          }}
        />
      </div>

      <div className="modal-content">
        <div className="profile">
          <img src={Logo} alt="Logo" />
          <div className="title">
            <h3>Facebook</h3>
            <div className="title-dropdown">
              <FaUserFriends className="icon" />
              <p>Friends</p>
              <FaCaretDown className="icon" />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="textarea">
            <textarea
              autoFocus
              className={`text-area ', ${
                post.gifURL !== '' ? 'small' : 'large'
              }`}
              placeholder="What's on your mind, FaceBook?"
              value={post.text}
              onChange={(event) => {
                setPost((post) => ({
                  ...post,
                  text: event.target.value,
                }));
              }}
            />
          </div>

          {post.gifURL !== '' ? (
            <div className="selected_gif">
              <img src={post.gifURL} alt="GIF" />
              <CgClose
                color="#6c757d"
                className="gif-close-icon"
                onClick={() => {
                  setPost((post) => ({
                    ...post,
                    gifURL: '',
                  }));
                }}
              />
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="color-emoji">
          <img src={TextColor} alt="Text color" width={40} />
          <FaRegSmile color="#adb5bd" />
        </div>

        <div className="media">
          <h3>Add to your post</h3>
          <Tooltip title="Photo/Video" placement="top">
            <div className="media-icon">
              <BsFileImage color="#76c893" />
            </div>
          </Tooltip>
          <Tooltip title="Tag People" placement="top">
            <div className="media-icon">
              <FaUserTag color="#3a86ff" />
            </div>
          </Tooltip>
          <Tooltip title="Feeling/Activity" placement="top">
            <div className="media-icon">
              <BsEmojiLaughing color="#fcbf49" />
            </div>
          </Tooltip>
          <Tooltip title="Check in" placement="top">
            <div className="media-icon">
              <IoLocationSharp color="#fb5607" />
            </div>
          </Tooltip>
          <Tooltip title="Life Event" placement="top">
            <div className="media-icon">
              <BsFillFlagFill color="#56cfe1" />
            </div>
          </Tooltip>
          <Tooltip title="GIF" placement="top">
            <div className="media-icon" onClick={() => setGifModal(true)}>
              <div className="gif-icon">
                <AiOutlineGif color="#ffffff" />
              </div>
            </div>
          </Tooltip>
          <Tooltip title="Live" placement="top">
            <div className="media-icon">
              <FaVideo fill="#e63946" />
            </div>
          </Tooltip>
        </div>
      </div>

      <div className="modal-footer">
        <Button
          appearance="primary"
          className="post-button"
          onClick={handlePost}
        >
          Post
        </Button>
      </div>
    </div>
  );
};
