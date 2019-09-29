import React from "react";
import "./style.css";

function Title(props) {
  return <div>
     <nav class="navbar">
         <ul>
             <li>Click Away!</li>
             <li>Score: {props.score} | High Score:{props.highscore}  </li>
         </ul>
     </nav>
     <div>
     <h1 className="title">{props.children}</h1>
     </div>
     </div>;
}

export default Title;
