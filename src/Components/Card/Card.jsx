import './Card.css';

export default function Card({name,img}){
  return <div className="body_card">
      <div className="img_card">
        <img src={img} alt="" height="100%" width="100%"/>
      </div>
      <div className="name_card">
        {name}
      </div>
   </div>
}