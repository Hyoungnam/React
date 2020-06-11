import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PostListPage from 'pages/PostListPage';
import PostPage from 'pages/PostPage';
import CounterPage from 'pages/CounterPage'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage}  />
      <Route path="/counter" component={CounterPage} exact />
    </BrowserRouter>
  );
}

export default App;
