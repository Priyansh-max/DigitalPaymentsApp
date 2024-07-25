import React from "react";

function Header({heading , subheading}){
    return(
        <div>
            <h1 className="text-pure-black text-4xl text-center font-bold pt-8 pb-4"> {heading} </h1>
            <h2 className="text-gray-600 text-md text-center font-medium px-8 text-wrap"> {subheading} </h2>
        </div>
    )
}

export default Header