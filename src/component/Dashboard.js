import React from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Table from "./Table";

const Dashboard = ({ isAdmin, isChild, isModerator, isParent }) => {
    return (
        <div>
            {isAdmin && (
                <h1 className="text-center text-black py-5 font-bold text-lg">
                    Admin Dashboard
                </h1>
            )}
            {isModerator && (
                <h1 className="text-center text-black py-5 font-bold text-lg">
                    Moderator Dashboard
                </h1>
            )}
            {isParent && (
                <h1 className="text-center text-black py-5 font-bold text-lg">
                    Parent Dashboard
                </h1>
            )}
            {isChild && (
                <h1 className="text-center text-black py-5 font-bold text-lg">
                    Child Dashboard
                </h1>
            )}
            <div className="w-4/5 mx-auto py-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="bg-white rounded shadow-md p-4">
                    <BarChart />
                </div>
                <div className="bg-white rounded shadow-md p-4">
                    <PieChart />
                </div>
                <div className="bg-white rounded shadow-md p-4">
                    <AreaChart />
                </div>
            </div>

            <div className="w-4/5 mx-auto p-10 bg-white shadow-md">
                <h2 className="text-lg py-2 text-black font-bold">
                    User table
                </h2>
                <Table />
            </div>
        </div>
    );
};

export default Dashboard;
