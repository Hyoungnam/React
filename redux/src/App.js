import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PostListPage from 'pages/PostListPage';
import PostPage from 'pages/PostPage';
import CounterPage from 'pages/CounterPage'
import ImmuCounterPage from 'pages/ImmuCounterPage'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage}  />
      <Route path="/counter" component={CounterPage} exact />
      <Route path="/immuCounter" component={ImmuCounterPage} exact />
    </BrowserRouter>
  );
}

export default App;
