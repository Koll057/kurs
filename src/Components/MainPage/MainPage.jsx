import {useNavigate,Outlet} from "react-router-dom"
import CardHolder from "../CardHolder/CardHolder"
export default function MainPage({cards}){
  return <div className="MainPage">
    <CardHolder cards={cards}/>
    <Outlet/>
  </div>
}