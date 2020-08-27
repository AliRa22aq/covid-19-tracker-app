import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';


function CountryChart({x}) {

  const [fetchedGlobalChartData, SetfetchedGlobalChartData] = useState([{}]);

  useEffect(() => {
    async function fetchedGlobalChart() {

      const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
      const countriesData = await Countryresponse.json();
      SetfetchedGlobalChartData(countriesData.countryitems[0])

    }
    fetchedGlobalChart();
  }, [SetfetchedGlobalChartData])

  console.log(fetchedGlobalChartData);

  const title = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].title
  //const total_cases = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_cases
  const total_recovered = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_recovered
  const total_deaths = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_deaths
  const total_active_cases = fetchedGlobalChartData && fetchedGlobalChartData[x] && fetchedGlobalChartData[x].total_active_cases

  
  const data = {
    labels: [
      'Deaths',
      'Recovered',
      'Active Cases'
    ],
    datasets: [{
      data: [total_deaths, total_recovered, total_active_cases],
      backgroundColor: [
      '#FF6384',
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
    <h1> {title} </h1>
    <Pie data={data} />
  </div>
  )
}

export default CountryChart
