import './App.css';
import Navbar from './components/Navbar';
import Formtags from './components/Formtags';
import Alert from './components/Alert';
import React, { useState } from 'react';



function App() {
  
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert =(message,type)=>{
   setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
 const toggleMode=()=>{
  if (mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been enabled","success");
    }
    else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","success");
  }
 }

  return (
    <> 
    <Navbar title="Editors" opt1="option1" toggleMode={toggleMode} mode={mode}/>
    <Alert showAlert={showAlert}  alert={alert} />
    <div className="container my-5">
    <Formtags placeholder="write something.."  showAlert={showAlert}   mode={mode}/>
    {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
