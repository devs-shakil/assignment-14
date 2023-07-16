import React, { useState } from "react";
import Header from '../components/Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../asset/css/style.css'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import ContentBtn from "../components/ContentBtn";
import Footer from "../components/Footer";
import '../../node_modules/font-awesome/css/font-awesome.min.css'
const Home = () => { 
    const [text, setText] = useState('');
    const [textDisplay, setTextDisplay] =useState('');
    const handleBtn = () =>{
        const textAreaValue = document.getElementById('textArea').value;
        setTextDisplay(textAreaValue)       
  }
    return (
        <div>
            <div className="container bg-info">

                    
                <Navbar/>
                <Header title="My React Application"/>      
                <Content text={text} setText={setText} />
                <ContentBtn textDisplay={textDisplay} setTextDisplay={setTextDisplay} handleBtn={handleBtn}/>
                <Footer/>

                
            </div>
        </div>
    );
};

export default Home;