import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2';


export default function GlobalTimeline(){

    const [globalTLData, SetGlobalTLData] = useState();
    //const [chartDates, SetChartDates] = useState([]);
    //const [chartData, SetChartData] = useState([]);

  
    useEffect(() => {
        async function FetchGlobalTLdata() {
           
            const GolobalTLresponse = await fetch('https://thevirustracker.com/timeline/map-data.json');
            const GolobalTL = await GolobalTLresponse.json();
            SetGlobalTLData(GolobalTL)
        }

       FetchGlobalTLdata()

    }, [SetGlobalTLData])
    
    return (
        <div>

        </div> 

    )
}
