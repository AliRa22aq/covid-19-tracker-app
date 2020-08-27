import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';



function GlobalChart() {

  const [globalData, SetGlobalData] = useState();

  useEffect(() => {
      async function fetchGlobaldata() {
          const APIresponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
          const datafromAPI = await APIresponse.json();
          SetGlobalData(datafromAPI.results[0])
      }
      fetchGlobaldata();
  }, [SetGlobalData])

  //const total_cases = globalData && globalData.total_cases
  const total_unresolved = globalData && globalData.total_unresolved;
  const total_recovered = globalData && globalData.total_recovered
  const total_deaths = globalData && globalData.total_deaths

  
  const data = {
    labels: [
      'Deaths',
      'Recovered',
      'Active Cases'
    ],
    datasets: [{
      data: [total_deaths, total_recovered, total_unresolved],
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
    <h1 style= {{textAlign: "center"}}> Global </h1>
    <Pie data={data} />
  </div>
  )
}

export default GlobalChart