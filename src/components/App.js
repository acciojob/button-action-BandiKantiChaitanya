import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  let [content,setContent]=useState(false)
function showContent(){
  setContent(true)
}
  return (
    <div className="App" id="main">
      {content ?
     <p id="para" className="show" >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
     :
     <p  id="para" className="hide"></p>
      }
     <button id="click" onClick={showContent}  >Show</button>
    </div>
  );
}

export default App
