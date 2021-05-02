import React from 'react'
import { GiBull } from "react-icons/gi";
import { AiOutlineHome } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <>
        
        <div className="sidenav">
            <div className="sidenavWrapper">
                <div className="logo-container">
                    <GiBull size={100} color="white" />
                </div>
                <div className="sidenavBottom">
                    <ul className="items-wrapper">
                        <NavLink exact={true} activeClassName="activelink" to="/" >
                            <li className="items">
                                <AiOutlineHome size={25} />
                                <span style={{ marginLeft: "20px" }}> Home</span>
                            </li>
                        </NavLink>
                        <NavLink activeClassName="activelink" to="/compare">
                            <li className="items">
                                <BiGitCompare size={25} />
                                <span style={{ marginLeft: "20px" }}> Compare</span>
                            </li>
                        </NavLink>

                    </ul>
                </div>

            </div>

        </div>
        </>
    )
}

export default Navbar
