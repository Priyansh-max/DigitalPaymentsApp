import React from "react";

function InputField({text , inputplaceholder}){
    return(
        <div>
            <h1 className="pt-2 pl-6 text-md text-left font-semibold">{text}</h1>
            <div className="pt-2 pb-3 px-6">
                <input type="text" placeholder={inputplaceholder} className="rounded-md border-2 border-gray-400 pl-2 py-1 w-full"/>
            </div>
        </div>
    )
}


export default InputField