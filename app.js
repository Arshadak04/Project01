import React from "react"
import ReactDOM from "react-dom/client"
 

// jsx Element
    const jsxheading=(<div>
        <h1 id="child01">Heading 1 js</h1>
        <h2 id="child02">Heading 2 js</h2>
    </div>)

    const JsxHeading= ()=>{
        return (
            <div>
                <h1>Arshad</h1>
                <h2>Qureshi</h2>
            </div>
        )
    }



    
    const Header = () => {
        return (
            <div className="header">
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
            </div>
        );
    };
    
    const Card = () => {
        return (
            <div className="card">
                <h4>Card Name</h4>
                <p>Card Details</p>
                <img src="https://via.placeholder.com/150" alt="Card" />
                <button>Click Me</button>
            </div>
        );
    };
    
    const Body = () => {
        return (
            <div className="body">
                <h1>This is the Site Heading</h1>
                <img src="https://via.placeholder.com/200" alt="Main Image" />
                <p>This is the best and basic paragraph for understanding everything.</p>
                <div className="product-section">
                    <p>This is the main part for some products</p>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    };
    
    const Footer = () => {
        return <div className="footer">All rights reserved with Arshad Qureshi</div>;
    };
    
    const Main = () => {
        return (
            <div className="container">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    };
    

    


    
    const root=ReactDOM.createRoot(document.getElementById("root"))
    // root.render(jsxheading);
    // root.render(<JsxHeading/>);
    root.render(<Main/>);



    
