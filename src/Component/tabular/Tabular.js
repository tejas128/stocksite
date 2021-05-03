import React,{useState,useContext,useEffect} from 'react'
import { AppContext } from '../../App'
import "./Tabular.css"
function Tabular() {
    const { tickerName, tickerName2} = useContext(AppContext)
    const [stock, setStock] = useState([])
    const [stock2, setStock2] = useState([])
    useEffect(() => {

      
        fetch(`https://api.polygon.io/v1/open-close/${tickerName}/2020-10-14?unadjusted=true&apiKey=jf4mJNhusRMdBeXvgNBliaV_gnNRk2bn`).then(res => res.json()).then(data => {

            
            console.log(data)
            setStock(data)
        }).catch(err => console.log(err))
        fetch(`https://api.polygon.io/v1/open-close/${tickerName2}/2020-10-14?unadjusted=true&apiKey=jf4mJNhusRMdBeXvgNBliaV_gnNRk2bn`).then(res => res.json()).then(data => {

            
            console.log(data)
            setStock2(data)
        }).catch(err => console.log(err))
        //fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json").then(res=>res.json()).then(data=>{
        //console.log(data)
        //setStocks(data)
        //})

    }, [tickerName, tickerName2])
    return (
        <div className="mt-4 p-4">
            <h4>Tabular Comparison:</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Low</th>
                        <th>Open</th>
                        <th>High</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{tickerName}</td>
                        <td>{stock.low}</td>
                        <td>{stock.open}</td>
                        <td>{stock.high}</td>

                    </tr>
                    <tr>
                        <td>{tickerName2}</td>
                        <td>{stock2.low}</td>
                        <td>{stock2.open}</td>
                        <td>{stock2.high}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabular
