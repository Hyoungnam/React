import React from "react";
import { Link } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import SnackReducer from "./reducer";
import SnackSaga from "./saga";

function SnackBar() {
  useInjectReducer({ key: "snackbar", reducer: SnackReducer });
  useInjectSaga({ key: "snackbar", saga: SnackSaga });

  return (
    <div>
      Snack component!
      <Link to="/counter">counter</Link>
    </div>
  );
}

export default SnackBar;
