
    // const heading=React.createElement("h1",{id:"child"},"Hello World");
//  <div>
//     <h1>
//         Hello Its Arshad Qureshi Inside a Heading
//     </h1>
//  </div>
    const parent=React.createElement(
        "div",{id:"parent"},
    
        [React.createElement(
            "h1",{id:"child1"},"Hello Its Arshad Qureshi Inside a Heading H1",
                
            ),React.createElement(
                "h2",{id:"child2"},"Hello Its Arshad Qureshi Inside a Heading H2",
                    
                )]
        
    ) 

    

        // [React.createElement(
        //     "h1",{id:"child1"},"Hello Its Arshad Qureshi Inside a Heading H1",
                
        //     ),React.createElement(
        //         "h2",{id:"child2"},"Hello Its Arshad Qureshi Inside a Heading H2",
                    
        //         )]
    
    const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent);

    
