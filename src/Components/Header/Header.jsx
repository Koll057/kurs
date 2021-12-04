import "./Header.css";
import {useNavigate} from "react-router-dom";
export default function Header(){
  const navigate = useNavigate();
  return <div className="Header">
    <div className="Logo" onClick={()=>{navigate("/")}}>Шапочки</div>
    <div className="Button" onClick={()=>{navigate("/AboutUs")}}>О нaс</div>
  </div>
}