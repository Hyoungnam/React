import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import TutorialPage from 'pages/TutorialPage';
import PostListPage from 'pages/PostListPage';
import PostPage from 'pages/PostPage';
import CounterContainer from 'containers/CounterContainer';


function App() {
  return (
    <>
      <CounterContainer />
      <BrowserRouter>
        <Route path="/" component={TutorialPage} exact />
        <Route path="/post" component={PostListPage} exact />
        <Route path="/:id" component={PostPage}  />
      </BrowserRouter>
    </>
  );
}

export default App;
