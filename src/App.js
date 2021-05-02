import React, { useState, useEffect } from 'react'
import "./App.css"
import Compare from './pages/compare/Compare';
import Home from './pages/home/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Component/navbar/Navbar';

export const AppContext = React.createContext();

function App() {
    const [tickerName, settickerName] = useState("AAPL")
    const [tickerName2, settickerName2] = useState("AAPL")
    const [tickers, setTickers] = useState([])
    useEffect(() => {
        fetch("https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=jf4mJNhusRMdBeXvgNBliaV_gnNRk2bn").then(res => res.json()).then(data => {
            console.log(data.tickers)
            setTickers(data.tickers)
        })
    }, [])
    return (
        <>
     
            <Router>
                
                <AppContext.Provider value={{ tickerName, settickerName, tickerName2, settickerName2, tickers, setTickers }}>
                    <Switch>
                        <Route path="/" exact>
                           <Home/>
                        </Route>
                        <Route path="/compare">
                            <Compare/>
                        </Route>
                    </Switch>

                </AppContext.Provider>
            </Router>
   

        </>
    )
}

export default App
