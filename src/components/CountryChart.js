import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';


function CountryChart({ x }) {

  const [fetchedGlobalChartData, SetfetchedGlobalChartData] = useState([{}]);
  //const [fetchedCountryCode, SetfetchedCountryCode] = useState([{}]);

  useEffect(() => {
    async function fetchedGlobalChart() {
      const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
      const countriesData = await Countryresponse.json();
      SetfetchedGlobalChartData(countriesData.countryitems[0])
    //  SetfetchedCountryCode(countriesData.countryitems[0])
      
    }
    fetchedGlobalChart();
  }, [])

  const title = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].title
  //const total_cases = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_cases
  const total_recovered = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_recovered
  const total_deaths = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_deaths
  const total_active_cases = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_active_cases

  // Fetch Country Code for daily Data



// Pi Chart
  const data = {
    labels: [
      'Deaths',
      'Recovered',
      'Active Cases'
    ],
    datasets: [{
      data: [total_deaths, total_recovered, total_active_cases],
      backgroundColor: [
      '#E64A19',
      '#90ee90',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#7CFC00'
      ]
    }]
  };


  
  return (
    <div>
    <h1 style= {{textAlign: "center"}}> {title} </h1>
    <Pie data={data} />
  </div>
  
  )

}

export default CountryChart
