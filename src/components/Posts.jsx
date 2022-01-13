import { useSelector } from 'react-redux';
import Post from './Post';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default Posts;
