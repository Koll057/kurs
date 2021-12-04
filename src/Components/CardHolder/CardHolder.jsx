import "./CardHolder.css"
import Card from "../Card/Card"
import { useNavigate } from "react-router"
export default function CardHolder({cards}){
  const navigate = useNavigate();
  return <div className="CardHolder">
    <div className="Container">
      {cards.map(card => <Card click={()=>{navigate(`/buy/${card.id}`)}} key={card.id} name={card.Name} img={card.Image} />)}
    </div>
  </div>
}