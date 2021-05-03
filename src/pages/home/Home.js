import React from 'react'
import CompareStockchart from '../../Component/CompareStockchart'
import Navbar from '../../Component/navbar/Navbar'
import Picker from '../../Component/picker/Picker'
import Stockchart from '../../Component/Stockchart'

import "./Home.css"
import { NavLink } from 'react-router-dom'
import TopNav from '../../Component/top-nav/TopNav'
function Home() {
    return (<>
        <TopNav />
        <div className="home row  ">
            <div className="col-lg-3 home-left">
                <Navbar />
            </div>
            <div className="  col-lg-9 ">
                <div className="container">
                    <div className="container">
                        <h1 className="homepagetopText">Stocks</h1>
                        <Picker />
                        <Stockchart />
                    </div>

                </div>

            </div>

        </div>
    </>
    )
}

export default Home
