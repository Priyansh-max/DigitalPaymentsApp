import React from "react";

function ButtonComponent({text , onClick}){
    return(
        <div>
            <div className="pt-2 px-6">
                <button onClick={onClick} className="bg-pure-black text-white font-normal text-xl rounded-md w-full h-[40px] pb-2 hover:bg-grey">
                    {text}
                </button>
            </div>
        </div>
    )
}

export default ButtonComponent