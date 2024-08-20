import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase !", "success");
  } 
   const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !","success");

   }
   const handleClearClick=()=>{
    let newText=' ';
    setText(newText);
    props.showAlert("Converted to cleartext !","success");

   }
   const handleSenseClick=()=>{
    let newText=text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to sentance !","success");
 
   }
  const handleOnChange =(event)=>{
     setText(event.target.value);
  }
  
  
  const[text,setText]=useState('Enter text here...');
  // setText=("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"value={text}onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} id="my-Box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleSenseClick}>Sentance case</button>



    </div>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}Mintues read</p>
    </div>
    </>
  )
}
