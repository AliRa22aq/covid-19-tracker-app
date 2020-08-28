import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';



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

  
  const [dailyData, SetDailyData] = useState({})
  useEffect(() => {
 
    async function Dailychart() {
      const APIdata = await fetch('https://covid19.mathdro.id/api/daily');
      const pretty = await APIdata.json();
      //SetDailyData(pretty.timelineitems[0])
      SetDailyData(pretty)
     }
     Dailychart();
   }, [])
 
 const LabelsforLine = Object.values(dailyData).map((v)=> {
   return ( v.reportDate )
 })
 const ConfirmedforLine = Object.values(dailyData).map((v)=> {
   return ( v.confirmed.total )
 })
 const DeathsforLine = Object.values(dailyData).map((v)=> {
   return ( v.deaths.total )
 })


 
// Pi chart
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
  
   // LIne CHart

const data2 = {
  labels: LabelsforLine,
  datasets: [
    {
      label: 'Confirmed',
      data: ConfirmedforLine,
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
    },
    {
      label: 'Deaths',
      data: DeathsforLine,
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'red',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'red',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
    }
  ]
};

  return (
    <div>
   <h1 style= {{textAlign: "center"}}> Global </h1>
        <Line data={data2} />
 

  </div>
  )
}

export default GlobalChart