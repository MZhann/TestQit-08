import { useState } from "react";
import logo from "../../public/images/ArtDriveColorLogo.png";
import { Link } from "react-router-dom";


const Navbar = () => {

       return (
        <div className="text-4xl h-[60px] flex justify-between items-center pl-10 pr-10 bg-black bg-opacity-10 fixed w-full">
            <div>
                <Link to={"/"}>
                    <img src={logo} alt="logo" width={50} />
                </Link>
            </div>

            <div className="flex text-center text-lg px-6 py-2 text-white space-x-10 font-bold ">
                {/* <Link to={"/generation"} className="">
                    Generate
                </Link> */}
                <button class="relative  inline-block p-[4px] bg-gradient-to-r from-green-400 to-yellow-400 rounded-lg">
                    <span class="block px-4 py-2 text-black bg-white rounded-md">
                        Buttoггшщn&nbsp;
                    </span>
                </button>
                {/* <Link to={"/"} className="">
                    {" "}
                    <span class="material-icons">home</span>
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;
