import React from "react";
// import { Values } from "redux-form-website-template";
import CounterContainer from "containers/Counter";
import ContactContainer from "containers/Contact";
import InitializeFromStateForm from "containers/InitializeFromStateForm";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <ContactContainer />
      <InitializeFromStateForm />
      {/* <Values form="initializeFromState" /> */}
    </div>
  );
}

export default App;
