import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import JsPractice from "./components/JsPractice/JsPractice";
import Js from "./components/JS/Js";
import Counter from "./components/Counter/Counter";
import Card from "./components/StylingPractice/StylingPractice";
const App=()=>{
  return (
    <div>
      <Navbar/>
      <JsPractice/>
    <Js/>
    <Counter/>
    <Card/>
      <Footer/>
    </div>
  )
}
export default App;