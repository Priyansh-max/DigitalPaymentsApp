import React from "react";

function InputField({text , inputplaceholder , onChange , error}){
    console.log("gegwe")
    console.log(error)
    return(
        <div>
            <h1 className="pl-6 text-md text-left font-semibold">{text}</h1>
            <div className="pt-1 pb-3 px-6">
                <input onChange={onChange} type="text" placeholder={inputplaceholder} required className={`rounded-md border-2 border-gray-400 pl-2 py-1 w-full ${error ? "border-red" : "border-gray-400"}`}/>
                {error && <p className="text-red text-xs mt-1 italic">{error}</p>}
            </div>
        </div>
    )
}


export default InputField