import React, { useState, useEffect, useContext } from "react";

import Highcharts, { stockChart } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { AppContext } from "../App";



// init the module






const Stockchart = () => {
    const { tickerName } = useContext(AppContext)
    const [stocks, setStocks] = useState([])
    
    useEffect(() => {

        var arr = []
        var len = 0
        fetch(`https://api.polygon.io/v2/aggs/ticker/${tickerName}/range/1/day/2018-10-14/2020-10-14?unadjusted=true&sort=asc&limit=120&apiKey=jf4mJNhusRMdBeXvgNBliaV_gnNRk2bn`).then(res => res.json()).then(data => {

            len = data.results.length

            for (var i = 0; i <= len; i++) {


                data.results[i] && arr.push([data.results[i].t, data.results[i].o, data.results[i].h, data.results[i].l, data.results[i].c, data.results[i].v])



            }
            console.log(arr)
            setStocks(arr)
        }).catch(err => console.log(err))
     
        //fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json").then(res=>res.json()).then(data=>{
        //console.log(data)
        //setStocks(data)
        //})

    }, [tickerName])

    const options = {
        yAxis: [{
            labels: {
                align: 'left'
            },
            height: '80%',
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'left'
            },
            top: '80%',
            height: '20%',
            offset: 0
        }],
        
        series: [
            {
               type:"ohlc",
               name:tickerName,
                data: stocks,
               
            }
            

        ],
        
    };

    return (
 
            <div style={{ marginTop: "50px"}} >

                <HighchartsReact

                    highcharts={Highcharts}
                    constructorType={"stockChart"}
                    options={options}
                />
            </div>


    )
};




export default Stockchart
