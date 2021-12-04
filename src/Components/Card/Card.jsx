import './Card.css';

export default function Card({name,img,click}){
  return <div className="body_card" onClick={()=>{click()}}>
      <div className="img_card">
        <img src={img} alt="" height="100%" width="100%"/>
      </div>
      <div className="name_card">
        {name}
      </div>
   </div>
}