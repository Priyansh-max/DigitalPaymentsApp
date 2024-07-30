import React, { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import ButtonComponent from "../components/ButtonComponent";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(){
    const [Firstname , setFirstname] = useState("");
    const [Lastname , setLastname] = useState("");
    const [Username , setUsername] = useState("");
    const [Password , setPassword] = useState("");
    const [Errors , setErrors] = useState({});
    const navigate = useNavigate();

    return(
        <div className="bg-grey flex justify-center items-center min-h-screen p-4">
            <div className="bg-white w-[400px] h-[630px] max-w-md max-h-md h-auto px-6 rounded-xl shadow-lg py-4">
                <Header heading={"Sign Up"} subheading={"Enter your information to create an account"}></Header>
                <InputField onChange={(e) => {
                    setFirstname(e.target.value);
                }} text={"First Name"} inputplaceholder={"Priyansh"} error={Errors.firstname}></InputField>
                <InputField onChange={(e) => {
                    setLastname(e.target.value);
                }} text={"Last Name"} inputplaceholder={"Agarwal"} error={Errors.lastname}></InputField>
                <InputField onChange={(e) => {
                    setUsername(e.target.value);
                }} text={"Email"} inputplaceholder={"User@gmail.com"} error={Errors.username}></InputField>
                <InputField onChange={(e) => {
                    setPassword(e.target.value);
                }} text={"Password"} inputplaceholder={"*********"} error={Errors.password}></InputField>
                <ButtonComponent onClick={async () => {
                    if(Username == "" || Password == "" || Firstname == "" || Lastname == ""){
                        setErrors({
                            username : Username === "" ? "Username is required*" : "",
                            password : Password === "" ? "Password is required*" : "",
                            firstname : Firstname === "" ? "Firstname is required*" : "",
                            lastname : Lastname === "" ? "Lastname  is required*" : "",
                        })
                    }
                    else{
                        try{
                            const response = await axios.post("http://localhost:3000/api/v1/users/signup",{
                                username : Username,
                                password : Password,
                                firstname : Firstname,
                                lastname : Lastname
                            })

                            console.log("fqwf");
                            console.log(response);
                            if(response.status === 200){
                                navigate("/dashboard")
                            }
                        }catch (error) {
                            if (error.response && error.response.data.message) {
                                setErrors({ message: error.response.data.message });
                            } else {
                                setErrors({ message: "Something went wrong. Please try again." });
                            }
                        }
                
                }}} text={"Sign up"}></ButtonComponent>
                <div className="flex justify-center">
                    {Errors.message && <p className="text-red text-xs  italic">{Errors.message}</p>}
                </div>
                <div className="flex flex-row justify-center pt-4 px-6">
                    <p className="text-sm font-semibold text-center mr-2">Already have a account? </p>
                    <Link to="/signin" className="text-sm font-semibold text-center underline hover:text-sky-700">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
