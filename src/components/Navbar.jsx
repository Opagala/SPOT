import React, { useState, useEffect } from "react";

const Navbar = () => {   
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <h1 className="text-xl font-bold text-blue-600">ZETA SPOT</h1>
            <div className="space-x-4">
                <a href="#" className="text-grey-600 hover:text-blue-600">Home</a>
                <a href="#" className="text-grey-600 hover:text-blue-600">About</a>
                <a href="#" className="text-grey-600 hover:text-blue-600">Contact</a>
            </div>
        </nav>
    );
};


export default Navbar;