import React from "react";
import "./style.css";

function Title(props) {
  return <div>
     <nav class="navbar">
         <ul>
             <li>li1</li>
             <li>li2</li>
             <li>li3</li>
         </ul>
     </nav>
     <h1 className="title">{props.children}</h1>
     </div>;
}

export default Title;
