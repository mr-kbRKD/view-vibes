import React from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col p-5 m-1 shadow-lg">
            <div className="flex col-span-1  ">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu" />

                <a href="/">
                    <img className="h-8 mx-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="YoutubeImage" />
                </a>

            </div>
            <div className="col-span-10 text-center">
                <input className="px-6 w-1/2 border border-gray-400 p-2 rounded-l-full " type="search" placeholder="Search Here" />
                <button className="border border-gray-400 px-3 py-2 rounded-r-full bg-gray-200">🔍</button>
            </div>

            <div>
                <img className="h-8 col-span-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXArpKCwSeifzEp-VkKrG49oeuSzrNauCNMTiHXEtZw&s" alt="User icon" />
            </div>
        </div>
    );
};

export default Head;