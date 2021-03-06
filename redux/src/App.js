import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PostListPage from 'pages/PostListPage';
import PostPage from 'pages/PostPage';
import CounterPage from 'pages/CounterPage'
import ImmuCounterPage from 'pages/ImmuCounterPage'
import ReselectPage from 'pages/ReselectPage';
function App() {
  return (
    <BrowserRouter>
     <ImmuCounterPage/>
      {/* <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage}  />
      <Route path="/counter" component={CounterPage} exact />
      <Route path="/immucounter" component={ImmuCounterPage} exact />
      <Route path="/reselect" component={ReselectPage} exact /> */}
    </BrowserRouter>
  );
}

export default App;
