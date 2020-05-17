import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PostListPage from 'pages/PostListPage';
import PostPage from 'pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage}  />
    </BrowserRouter>
  );
}

export default App;
