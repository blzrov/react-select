import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";

import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <Container>
        <MyForm />
      </Container>
    </div>
  );
}

export default App;
