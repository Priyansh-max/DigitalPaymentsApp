import React from "react"

function DisplayUser({username}){
    let value = username[username.length - 1];

    console.log(value);
    return(
        <div className="flex flex-row items-center justify-between px-4 py-4">
            <div className="flex flex-row items-center justify-center">
                <div className="bg-slate-400 rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    <p className="text-pure-black font-semibold">U{value}</p>
                </div>
                <p className="pl-3 text-xl font-semibold">{username}</p> 
            </div>
            <button className="bg-pure-black text-white px-4 rounded-md h-[40px] w-[150px] text-md">Send Money</button>
        </div>
    )

}
export default DisplayUser