import "./CardHolder.css"
export default function CardHolder(props){
  return <div className="CardHolder">
    <div className="Container">
      {props.children}
    </div>
  </div>
}