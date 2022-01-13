import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import './styles/App.scss'

const App = () => {
  return (
    <div className='main'>
      <CreatePost />
      <Posts></Posts>
    </div>
  );
};

export default App;
