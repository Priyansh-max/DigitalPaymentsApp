//main dashbaord
import React from "react";
import DisplayUser from "../components/DisplayUser";

function Dashboard(){
    return(
        <div>
            <div className="flex flex-row justify-between">
                <h1 className="pt-3 pl-4 text-2xl font-bold">Payment Dashboard</h1>
                <div className="flex flex-row pt-3 pr-5 pb-4">
                    <h1 className="mr-4 pt-1 text-xl">User-Name</h1>
                    <div className="bg-gray-300 rounded-full w-[40px] h-[40px]">
                        <p className="pt-1 pl-3 text-xl">U</p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-300"></div>
            
            <p className="px-4 pb-4 pt-4 text-xl font-bold">Your Current balance - 5000₹</p>
            <p className="px-4 pb-4 pt-4 text-xl font-bold">Users</p>
        
            <div className="px-4 pb-4">
                <input className="pl-2 placeholder:italic placeholder:text-slate-400 rounded-md border-2 border-gray-400 w-full"type="text" placeholder="Search Friend......" />
            </div>

            <DisplayUser username={"User1"}></DisplayUser>
            <DisplayUser username={"User2"}></DisplayUser>
            <DisplayUser username={"User3"}></DisplayUser>
            <DisplayUser username={"User4"}></DisplayUser>
            <DisplayUser username={"User5"}></DisplayUser>
        </div>
    )
}

export default Dashboard;