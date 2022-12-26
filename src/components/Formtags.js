
import React,{ useState } from 'react'

export default function Formtags(props) {
  
    function handleChange(event){
    
        setText(event.target.value);
    };
    const handleUpClick=(event)=>{
        let newtxt=text.toUpperCase();
        setText(newtxt);
        props.showAlert("Coverted to Upper-Case","success")
      };
    const handleLowClick=()=>{
      let newtxt=text.toLowerCase();
      setText(newtxt);
      props.showAlert("Coverted to Lower-Case","success")
      };
      const handleCopyTxtClick=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied Text to Clipboard","success")
      }
      const handleExtraSpacesClick=()=>{
        let newtxt=text.replace(/\s+/g,' ').trim();
        setText(newtxt);
        props.showAlert("Removed Extra Spaces","success")
        };
        const handleClearTxtClick=()=>{
          let newtxt="";
          setText(newtxt);
          props.showAlert("All text Has been Cleared","success")
          };
    const[text,setText]=useState("");
      return (

    <>
        <div className="mb-3"  style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743'}}>
        <label htmlFor="exampleFormControlTextarea1"  className="form-label" >Enter Text Here</label>
        <textarea className="form-control" onChange={handleChange} placeholder={props.placeholder}  style={{backgroundColor:props.mode==='light'?'white':'#042743',    color:props.mode==='light'?'black':'white'}}
        id="exampleFormControlTextarea1" value={text} rows="8"></textarea></div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">UpperCase</button>
        <button type="button" onClick={handleLowClick} className="btn btn-primary mx-2">LowerCase</button>  
        <button type="button" onClick={handleClearTxtClick} className="btn btn-primary mx-2">Clear Text</button> 
        <button type="button" onClick={handleExtraSpacesClick} className="btn btn-primary mx-2">Remove Extra Spaces</button>  
        <button type="button" onClick={handleCopyTxtClick} className="btn btn-primary mx-2">Copy Text</button>  
                <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
       
        <h3>Summary</h3>
        <p>{text.trim().length==0?text.replace(/\s+/g,' ').trim().split(" ").length-1
        :text.replace(/\s+/g,' ').trim().split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Some Text..."}</p>
        </div>
        
      </>
    )
  }