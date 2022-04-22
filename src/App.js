import Nav from "./components/Nav";
import Team from "./components/Team";
import React from "react";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Team />
      <SignUp />
    </div>
  );
}
export default App;
