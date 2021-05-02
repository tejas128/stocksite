import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import "./Picker.css"
export default function Picker() {
    const {tickerName,settickerName,tickers}=useContext(AppContext)
   
    return (
        <div >
     
            <form  style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}} >
                <select className="form-select form-select-lg mb-3" onChange={(e)=>{
                  
                    settickerName(e.target.value)

                }}>
                    {
                        tickers.map(ticker=><option value={ticker.ticker}>
                            {ticker.name}
                        </option>)
                    }
                </select>
            </form>
        </div>
    )
}
