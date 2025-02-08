import { useRouteError } from "react-router";
const Error=()=>{

    const err=useRouteError();
    console.log(err)
   
    return (
        <div className="error-page">
            <h1>Error Page </h1>
            
            <h2>{err.error.message}</h2>

            <h2>Their is some Problem , Contact Arshad Qureshi - site owner arshadak04@gmail.com</h2>
        </div>
    )
}

export default Error;