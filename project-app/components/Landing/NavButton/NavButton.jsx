//Simple buttons which redirect the user to a different page/part of page when clicked.

import React from "react";

function NavButton( {buttonText}) {
    return (

        <button className = "justify-center	bg-[#FF9505] hover:bg-orange-700 text-white text-[15px] sm:text-[25px] font-bold py-2 px-4 rounded shadow-2xl	w-[11em] h-[3em]">
        {buttonText}
        </button>
    )
}

export default NavButton;