import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../App'
import CompareStockchart from '../../Component/CompareStockchart'
import Navbar from '../../Component/navbar/Navbar'
import Tabular from '../../Component/tabular/Tabular'
import TopNav from '../../Component/top-nav/TopNav'
import "./Compare.css"
function Compare() {
    const { tickerName, tickerName2,settickerName, settickerName2, tickers } = useContext(AppContext)
    const [stocks, setStocks] = useState([])
    const [stocks2, setStocks2] = useState([])
    useEffect(() => {

        var arr = []
        var arr2 = []
        var len = 0
        fetch(`https://api.polygon.io/v2/aggs/ticker/${tickerName}/range/1/day/2018-10-14/2020-10-14?unadjusted=true&sort=asc&limit=120&apiKey=jf4mJNhusRMdBeXvgNBliaV_gnNRk2bn`).then(res => res.json()).then(data => {

            len = data.results.length

            for (var i = 0; i <= len; i++) {


                data.results[i] && arr.push([data.results[i].t, data.results[i].c])



            }
            console.log(arr)
            setStocks(arr)
        }).catch(err => console.log(err))
        fetch(`https://api.polygon.io/v2/aggs/ticker/${tickerName2}/range/1/day/2018-10-14/2020-10-14?unadjusted=true&sort=asc&limit=120&apiKey=jf4mJNhusRMdBeXvgNBliaV_gnNRk2bn`).then(res => res.json()).then(data => {

            len = data.results.length

            for (var i = 0; i <= len; i++) {


                data.results[i] && arr2.push([data.results[i].t, data.results[i].c])



            }
            console.log(arr2)
            setStocks2(arr2)
        }).catch(err => console.log(err))
        //fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json").then(res=>res.json()).then(data=>{
        //console.log(data)
        //setStocks(data)
        //})

    }, [tickerName, tickerName2])
    return (
        <>
        <TopNav/>
        <div className=" row compare " >
            <div className="col-lg-3">
                <Navbar />
            </div>
            <div className="  col-lg-9 ">
                <div className="container " >
                    <div className='container'>
                        <h4 style={{marginBottom:"30px"}}>Compare Stocks:</h4>
                        <div className="row">
                            <div className="col-sm-6 ">
                                <label className="mb-3">Stock1:</label>    
                                <select className="form-select" style={{marginBottom:"10px"}} onChange={(e) => {

                                    settickerName(e.target.value)

                                }}>
                                    {
                                        tickers.map(ticker => <option value={ticker.ticker}>
                                            {ticker.name}
                                        </option>)
                                    }

                                </select>
                            </div>
                            <div className='col-sm-6'>
                            <label className="mb-3" >Stock2:</label>
                                <select className="form-select" onChange={(e) => {

                                    settickerName2(e.target.value)

                                }}>
                                    {
                                        tickers.map(ticker => <option value={ticker.ticker}>
                                            {ticker.name}
                                        </option>)
                                    }
                                </select>
                            </div>


                        </div>
                        <CompareStockchart stocks={stocks} stocks2={stocks2} />

                    </div>
                    
                    <Tabular/>
                </div>

            </div>

        </div>
        </>

    )
}

export default Compare
