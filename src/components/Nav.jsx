import React from "react";

const Nav = () => {
    return(
        <nav>
            <ul className="navUl">
                <li className="navigationList"> <a href='#home' className="navlink">Star Wars</a> </li>
                <li className="navigationList"><a href="#canon" className="navlink">Canon</a></li>
                <li className="navigationList"><a href="#legends" className="navlink">Legends</a></li>
                <li className="navigationList"><a href="#videogames" className="navlink">Videogames</a></li>
            </ul>
        </nav>
    )
}

export default Nav;