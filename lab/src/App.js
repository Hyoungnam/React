import React from 'react';
import PostWithData from 'hoc/Post';
import Comments from 'hoc/Comments';
function App() {
  return (
    <div className="App">
      <h1>PostWithData</h1>
      <PostWithData />
      <br></br>
      <h1>CommentsWithData</h1>
      <Comments />
    </div>
  );
}

export default App;


