import Card from './Components/Card/Card';
import Header from "./Components/Header/Header"
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import './App.css';
import img1 from "./Components/img/1.png";
import img2 from "./Components/img/2.png";
import img3 from "./Components/img/3.png";
import img4 from "./Components/img/4.png";
import img5 from "./Components/img/5.png";
import b1 from "./Components/img/b1.png";
import b2 from "./Components/img/b2.png";
import b3 from "./Components/img/b3.png";
import b4 from "./Components/img/b4.png";
import b5 from "./Components/img/b5.png";
import b6 from "./Components/img/b6.png";
import b7 from "./Components/img/b7.png";
import b8 from "./Components/img/b8.png";
import b9 from "./Components/img/b9.png";
import b10 from "./Components/img/b10.png";
import imgF0 from "./Components/img/background0.jpg";
import {useState} from 'react';
import { Route,Routes,Link,useLocation} from 'react-router-dom';
import "./Components/AboutUs/AboutUs"
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  let location = useLocation();
  let Cards = [
    {Image:img1, Name:"Тапочки",id:0},
    {Image:img2, Name:"Шапки",id:1},
    {Image:img3, Name:"Перчатки",id:2},
    {Image:img4, Name:"Шарфы",id:3},
    {Image:img5, Name:"Носки",id:4},
  ]
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
          <div>
          <MainPage cards={Cards}/>
          {location.pathname ==='/' && <div className="fonk" style = {{width: "100%", height: "670px", background: `url(${imgF0})`, backgroundSize:"cover"}}/>}
          </div>
        }>
          <Route path="buy" element={      <div className="fonk" style = {{width: "100%", height: "670px", background: `url(${imgF0})`, backgroundSize:"cover"}}/>}/>
          <Route path="buy/0" element={<Footer imgb1={b1} imgb2={b2}/>}/>
          <Route path="buy/1" element={<Footer imgb1={b3} imgb2={b4}/>}/>
          <Route path="buy/2" element={<Footer imgb1={b5} imgb2={b6}/>}/>
          <Route path="buy/3" element={<Footer imgb1={b7} imgb2={b8}/>}/>
          <Route path="buy/4" element={<Footer imgb1={b9} imgb2={b10}/>}/>
        </Route>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>

    </div>
  );
}

export default App;
