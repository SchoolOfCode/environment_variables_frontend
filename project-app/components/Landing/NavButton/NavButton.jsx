//Simple buttons which redirect the user to a different page/part of page when clicked.

import React from "react";

function NavButton( {buttonText}) {
    return (

        <button className = "bg-[#FF9505] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow-2xl	">
        {buttonText}
        </button>
    )
}

export default NavButton;