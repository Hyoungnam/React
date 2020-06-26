import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import CounterPage from "pages/Counter";
import SnackBarPage from "pages/Snackbar";
function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={PostListPage} exact /> */}
      {/* <Route path="/:id" component={PostPage}  /> */}
      <Route path="/" component={SnackBarPage} exact />
      <Route path="/counter" component={CounterPage} exact />
    </BrowserRouter>
  );
}

export default App;

