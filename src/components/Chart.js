
import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';



function Chart({x}) {



    const [fetchedChartData, SetfetchedChartData] = useState([{}]);

    useEffect(() => {
      async function fetchedChart() {
        const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
        const countriesData = await Countryresponse.json();
        SetfetchedChartData(countriesData.countryitems[0])
  
      }
      fetchedChart();
    }, [SetfetchedChartData])
  
    const a = fetchedChartData && fetchedChartData[x] && fetchedChartData[x].title
    const b = fetchedChartData && fetchedChartData[x] && fetchedChartData[x].total_cases
    const c = fetchedChartData && fetchedChartData[x] && fetchedChartData[x].total_recovered
    const d = fetchedChartData && fetchedChartData[x] && fetchedChartData[x].total_deaths

    const data = {
        labels: ['Total Cases', 'Total Recovered', 'Toral Deaths'],
        datasets: [
          {
            label: a,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [b,c, d]
          }
        ]
      };


    return (
        <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />        </div>
    )
}

export default Chart
