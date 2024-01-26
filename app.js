import React from "react";
import { createRoot } from "react-dom/client";

//React element
// React element is OBJECT
//When we render react ele, ReactDOM lib takes this react object and convert it to html ele to render
//it on browser. It repalces the html root content to react rootcontent

//i.e ---> "Hiii!!" from dom willbe dispalyed first and imm. willbe replaced by "Text" in raect heading ele.

// *eg if we have to  craete heading elemnt in React
//JS
// -const heading = React.createElement("h1",{id:"heading","Text"});
// This react element is not HTML element, it bexcomes html element when we render it on html dom

// *(we can render react ele by creating root ele  in react)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

///////////////////   Efficient way to do all this is JSX(js syntax to easily create react ele)
//JSX
//Its NOT html in JS, it is html like syntax
//-const jsxheading = <h1 id="heading">Text</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
//But Parcel uses  Babel compiler transform / tranpiled jsx code to js / js engine understable code before it reaches to js engine



const heading = (
    <h1 className="clsname">
        React Element
    </h1>
)
////Attribute class is replace by className in jsx

const HeadingComponant = () =>(
    <div id="container">
        <h1>React Componant</h1>
    </div>
    );

    const root = createRoot(document.getElementById("root"));
//HOW to render functinal compo 
    root.render(<HeadingComponant />);
