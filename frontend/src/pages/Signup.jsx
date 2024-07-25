import React from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from 'react-router-dom';

function Signup(){
    return(
        <div className="bg-grey flex justify-center items-center h-screen">
            <div className="bg-white w-[350px] h-[600px] rounded-xl shadow-6xl">
                <Header heading={"Sign Up"} subheading={"Enter your information to create an account"}></Header>
                <InputField text={"First Name"} inputplaceholder={"Priyansh"}></InputField>
                <InputField text={"Last Name"} inputplaceholder={"Agarwal"}></InputField>
                <InputField text={"Email"} inputplaceholder={"User@gmail.com"}></InputField>
                <InputField text={"Password"} inputplaceholder={"*********"}></InputField>
                <ButtonComponent text={"Sign up"}></ButtonComponent>
                <div className="flex flex-row justify-center pt-4 px-6">
                    <p className="text-sm font-semibold text-center mr-2">Already have a account? </p>
                    <Link to="/signin" className="text-sm font-semibold text-center underline hover:text-sky-700">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
