import React, { useState, useEffect, useContext } from "react";

import Highcharts, { stockChart } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { AppContext } from "../App";

function CompareStockchart({stocks,stocks2}) {
    const { tickerName,tickerName2 } = useContext(AppContext)
    

    const options = {
        title: {
            text: 'Stocks compare by <em>percent</em>'
        },
      

        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
                format: '{value} %'
            },
            plotLines: [{
                value: 100,
                width: 1,
                color: '#333333',
                zIndex: 3
            }]
        },

        plotOptions: {
            series: {
                compare: 'percent',
                compareBase: 100
            }
        },
        
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            changeDecimals: 2,
            valueDecimals: 2
        },
        series: [
            {
               
               name:tickerName,
                data: stocks,
               
            },
            {
                name:tickerName2,
                data:stocks2
            },
           

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
}

export default CompareStockchart
