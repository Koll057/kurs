import Card from './Components/Card/Card';
import Header from "./Components/Header/Header"
import CardHolder from "./Components/CardHolder/CardHolder";
import Footer from "./Components/Footer/Footer";
import './App.css';
import img1 from './Components/img/1.png';
import imgF1 from './Components/img/b1.png';
import imgF2 from './Components/img/b2.png';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <CardHolder/>
      <Footer imgb1={img1} imgb2={imgF2}/>
    </div>
  );
}

export default App;
