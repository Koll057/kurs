import Card from './Components/Card/Card';
import Header from "./Components/Header/Header"
import CardHolder from "./Components/CardHolder/CardHolder";
import './App.css';
import img1 from './Components/img/1.png'
function App() {
  let Cards = [
    {Image:img1, Name:"Тапочки"},
    {Image:img1, Name:"Шапки"},
    {Image:img1, Name:"Перчатки"},
    {Image:img1, Name:"Шарфы"},
    {Image:img1, Name:"Носки"},
  ]
  return (
    <div className="App">
      <Header/>
      <CardHolder>
        {Cards.map(card => <Card name={card.Name} img={card.Image}/>)}
      </CardHolder>
    </div>
  );
}

export default App;
