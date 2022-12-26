
import React , {useState} from 'react';

export default function About(){
    const [Mode, setMode] = useState({
        color:"black",
        backgroundColor:"white"
        });
         const [btnState, setbtnState] = useState("Dark Mode");
         const toggleBtn=()=>{
            if (Mode.color==="black"){
                setMode({   color:"white",
                backgroundColor:"black"});
                 setbtnState("Light Mode");
                }
           else{
                setMode({
                    color:"black",
                    backgroundColor:"white"
                    });
                    setbtnState("Dark Mode");
            }
        
         }
return( 
    
    <>
    <div className="container">
       <button onClick={toggleBtn} style={Mode}
        className="btn-primary">{btnState}</button>
    </div>
    </>
)
}
