//Simple buttons which redirect the user to a different page/part of page when clicked.

import React from "react";

function NavButton( {buttonText}) {
    return (
        <button className = "bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded">
        {buttonText}
        </button>
    )
}

export default NavButton;