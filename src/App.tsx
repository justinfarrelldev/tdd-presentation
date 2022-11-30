import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CartButton } from "./components/CartButton/cartButton";
import { Header } from "./components/Header/header";

function App() {
  return (
    <>
      <Header></Header>
      <CartButton text="CART"></CartButton>
    </>
  );
}

export default App;
