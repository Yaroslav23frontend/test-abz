import Nav from "../components/Nav";
import Team from "../components/Team";
import React from "react";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import ScrollButton from "../components/ScrollButton";
function Main() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Team />
      <SignUp />
      <ScrollButton />
    </div>
  );
}
export default Main;
