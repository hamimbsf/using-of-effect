import Comments from "./components/fetchingData/Comments";
import MyComponents from "./components/videoPlayer/MyComponents";

const App = () => {
  return (
    <div>
      {/* <MyComponents /> */}
      <Comments postId="1" />
    </div>
  );
};

export default App;
