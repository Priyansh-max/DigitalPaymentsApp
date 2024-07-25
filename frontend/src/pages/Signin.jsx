import React from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from 'react-router-dom';

function Signin(){
    return(
        <div className="bg-grey flex justify-center items-center h-screen">
            <div className="bg-white  w-[350px] rounded-xl shadow-6xl">
                <Header heading={"Sign In"} subheading={"Enter your credentials to login to your account"}></Header>
                <InputField text={"Email"} inputplaceholder={"User@gmail.com"}></InputField>
                <InputField text={"Password"} inputplaceholder={"*********"}></InputField>
                <ButtonComponent text={"Sign up"}></ButtonComponent>
                <div className="flex flex-row justify-center pt-4 px-6 pb-4">
                    <p className="text-sm font-semibold text-center mr-2">Dont have a account? </p>
                    <Link to="/signup" className="text-sm font-semibold text-center underline hover:text-sky-700">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;
