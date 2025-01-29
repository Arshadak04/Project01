import React from "react"
import ReactDOM from "react-dom/client"
 
// This is the how to react element created but we did not like this ,
//  we create react elemnt through the jsx which is easy


    // const parent=React.createElement(
    //     "div",{id:"parent"},
    
    //     [React.createElement(
    //         "h1",{id:"child1"},"Hello Its Arshad Qureshi Inside a Heading H1",
                
    //         ),React.createElement(
    //             "h2",{id:"child2"},"Hello Its Arshad Qureshi Inside a Heading H2",
                    
    //             )]
        
    // ) 

    const jsxheading=(<div>
        <h1 id="child01">Heading 1 js</h1>
        <h2 id="child02">Heading 2 js</h2>
    </div>)

    
    const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(jsxheading);

    
