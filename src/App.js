import Card from './Components/Card/Card';
import Header from "./Components/Header/Header"
import CardHolder from "./Components/CardHolder/CardHolder";
import Footer from "./Components/Footer/Footer";
import './App.css';
import img1 from './Components/img/1.png';
import imgF1 from './Components/img/b1.png';
import imgF2 from './Components/img/b2.png';
import {useState} from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import "./Components/AboutUs/AboutUs"
import AboutUs from './Components/AboutUs/AboutUs';
function App() {
  const [GoodId,SetGoodId] = useState(-1);
  let Cards = [
    {Image:img1, Name:"Тапочки",id:0},
    {Image:img1, Name:"Шапки",id:1},
    {Image:img1, Name:"Перчатки",id:2},
    {Image:img1, Name:"Шарфы",id:3},
    {Image:img1, Name:"Носки",id:4},
  ]
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
          <CardHolder>
          {Cards.map(card => <Card click={()=>{SetGoodId(card.id)}} key={card.id} name={card.Name} img={card.Image} />)}
          </CardHolder>
        }>
        </Route>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
