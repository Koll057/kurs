import "./Footer.css"
import 
{Select,
MenuItem,
FormControl,
InputLabel,
makeStyles} from '@material-ui/core';
import {useState} from 'react';
const useStyles = makeStyles(theme =>({
  formcontrol:{
    width: 150,
  }
}));


export default function Footer({imgb1, imgb2}){
  const classes = useStyles();
  const [ColorId,SetColorId] = useState(1)
  const [FormId,SetFormId] = useState(1)

  return <div className="footer">
    <div className="settings">
      <div className="form">
        <div style = {{background:`url(${imgb1})`}} className={`blank b1 ${FormId===1 ? "bigForm" : ""}`} onClick={()=>{SetFormId(1)}}></div>
        <div style = {{background:`url(${imgb2})`}} className={`blank b2 ${FormId===2 ? "bigForm" : ""}`} onClick={()=>{SetFormId(2)}}></div>
      </div>
      <div className="options">
        <FormControl className={classes.formcontrol}>
          <InputLabel>Размер</InputLabel>
          <Select>
            <MenuItem value={26}>26</MenuItem>
            <MenuItem value={28}>28</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={32}>32</MenuItem>
            <MenuItem value={34}>34</MenuItem>
            <MenuItem value={36}>36</MenuItem>
            <MenuItem value={38}>38</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={42}>42</MenuItem>
            <MenuItem value={44}>44</MenuItem>
            <MenuItem value={46}>46</MenuItem>
          </Select>
        </FormControl>
        <div className="colors">
          <div className="color1"><button className={`color2 c1 ${ColorId===1 ? "bigColor" : "" }`} onClick={()=>{SetColorId(1)}}></button></div>
          <div className="color1"><button className={`color2 c2 ${ColorId===2 ? "bigColor" : "" }`} onClick={()=>{SetColorId(2)}}></button></div>
          <div className="color1"><button className={`color2 c3 ${ColorId===3 ? "bigColor" : "" }`} onClick={()=>{SetColorId(3)}}></button></div>
          <div className="color1"><button className={`color2 c4 ${ColorId===4 ? "bigColor" : "" }`} onClick={()=>{SetColorId(4)}}></button></div>
          <div className="color1"><button className={`color2 c5 ${ColorId===5 ? "bigColor" : "" }`} onClick={()=>{SetColorId(5)}}></button></div>
          <div className="color1"><button className={`color2 c6 ${ColorId===6 ? "bigColor" : "" }`} onClick={()=>{SetColorId(6)}}></button></div>
          <div className="color1"><button className={`color2 c7 ${ColorId===7 ? "bigColor" : "" }`} onClick={()=>{SetColorId(7)}}></button></div>
          <div className="color1"><button className={`color2 c8 ${ColorId===8 ? "bigColor" : "" }`} onClick={()=>{SetColorId(8)}}></button></div>
          <div className="color1"><button className={`color2 c9 ${ColorId===9 ? "bigColor" : "" }`} onClick={()=>{SetColorId(9)}}></button></div>
        </div>
      </div>
      <div className="button_buy"><p>Купить</p></div>
    </div>
  </div>
}