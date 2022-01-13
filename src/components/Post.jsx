import {
  HiCheckCircle,
  GoGlobe,
  HiOutlineDotsHorizontal,
  AiOutlineLike,
  FaRegCommentAlt,
  RiShareForwardLine,
} from '../constants/icons';
import Logo from '../assets/logo.ico';
import LikeIcon from '../assets/like-icon.svg';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={Logo} alt="Logo" />
        <div className="title">
          <div className="user-name">
            <h3>FaceBook</h3>
            <HiCheckCircle color="0c63e7" className="verified-icon" />
          </div>
          <div className="post-time">
            <p>Yesterday at 8.42 PM</p>
            <span>&#183;</span>
            <GoGlobe className="globe-icon" />
          </div>
        </div>
        <div className="menu">
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      <div className="post-content">
        <p>{post.text}</p>
        {post.gitURL !== '' ? <img src={post.gitURL} alt="gif" /> : ''}
      </div>
      <div className="post-footer">
        <div className="post-footer-top">
          <div className="like-count">
            <img src={LikeIcon} alt="like" />
            <p>{post.likes}</p>
          </div>
          <div className="comment-count">
            <p>{post.comments}</p>
            <p>Comments</p>
          </div>
          <div className="share-count">
            <p>{post.shares}</p>
            <p>Shares</p>
          </div>
        </div>

        <div className="post-footer-bottom">
          <div className="button">
            <AiOutlineLike />
            <span>Like</span>
          </div>
          <div className="button">
            <FaRegCommentAlt className="comment-icon" />
            <span>Comment</span>
          </div>
          <div className="button">
            <RiShareForwardLine />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
