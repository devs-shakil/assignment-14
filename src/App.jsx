import React, { useState } from "react";
import Header from "./components/Header";
import '../src/asset/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Content from './components/Content';
import ContentBtn from "./components/ContentBtn";
const App = () => {
  const [text, setText] = useState('');
  const handleButtonClick = () =>{
    const textAreaValue = document.getElementById('textArea').value;
    setText(textAreaValue)
  }
  return (
    <div>
        <Navbar/>
        <Header title="My React Application"/>      
        <Content text={text} setText={setText} handleButtonClick={handleButtonClick}/>
        <ContentBtn text={text} setText={setText} handleButtonClick={handleButtonClick}/>
    </div>
  );
};

export default App;