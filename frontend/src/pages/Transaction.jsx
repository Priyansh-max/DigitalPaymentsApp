import React from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from 'react-router-dom';

function Transaction(){
    return(
        <div className="bg-grey flex justify-center items-center h-screen">
            <div className="bg-white  w-[350px] rounded-xl shadow-6xl">
                <Header heading={"Transfer Money"} subheading={""}></Header>
                <div className="flex flex-row px-6 py-2">
                    <div className="rounded-full bg-green w-[60px] h-[60px] mr-3">
                        <p className="font-semibold text-center px-2 py-3 text-2xl">A</p>
                    </div>
                    <p className="font-semibold text-center px-1 py-2 text-3xl">Friend's Name</p>

                </div>
                <InputField text={"Amount ⟨₹⟩ "} inputplaceholder={"1000⟨₹⟩"}></InputField>
                <div className="pt-2 px-6 pb-6">
                <button className="bg-green text-white font-normal text-xl rounded-md w-full h-[40px] pb-2 hover:bg-dark-green py-1">
                    Send Money
                </button>
                </div>
            </div>
        </div>
    )
}

export default Transaction;