import React from "react";
import "./style.css";

function Title(props) {
  return <div>
     <nav class="navbar">
         <ul>
             <li>Clicky Away!</li>
             <li>Html to change on click</li>
             <li>Score: | Top Score: </li>
         </ul>
     </nav>
     <div>
     <h1 className="title">{props.children}</h1>
     </div>
     </div>;
}

export default Title;
