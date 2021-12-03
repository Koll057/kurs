import './Card.css';

export default function Card({nameC,imgC}){
  return <div className="body_card">
      <div className="img_card">
        <img src={imgC} alt="" height="100%" width="100%"/>
      </div>
      <div className="name_card">
        {nameC}
      </div>
   </div>
}