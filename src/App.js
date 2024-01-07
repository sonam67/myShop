import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Contact from "./Contact";
import Errorpage from "./Errorpage";
import { GlobalStyle} from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "black",
      white: "#fff",
      black: " #212529",
      helper: "solid black",

      bg: "#ffe48c",
      footer_bg: "#ffae00",
      btn: "#eebe1f",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "black",
      gradient:
        "linear-gradient(0deg,  rgb(255, 228, 140) 0%,  rgb(222, 175, 19) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/singleProduct/:id" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<Errorpage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
};

export default App;
