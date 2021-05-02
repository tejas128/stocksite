import React, { useState } from 'react'
import "./TopNav.css"
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { GiBull } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
function TopNav() {

    const [isclick, setisclick] = useState(false)
    const onClick = () => {

        setisclick(!isclick)

    }
    return (
        <div className="top-nav">
            <div className=" top-nav-wrapper">

                 {
                     isclick?<AiOutlineClose onClick={onClick} size={25}/>:  <AiOutlineMenu onClick={onClick} size={30} />
                 }
                   
              
            </div>
            <div className="topNavContainer" style={{ display: `${isclick ? "block" : "none"}` }}>
                <ul className="topnavitemsContainer">
                    <NavLink activeClassName={'active'} exact={true} to="/">
                        <li className="topnavItem">Home</li>
                    </NavLink>


                    <NavLink activeClassName={'active'}  to="/compare">
                        <li className="topnavItem"> Compare</li>
                    </NavLink>


                </ul>
            </div>

        </div>
    )
}

export default TopNav
