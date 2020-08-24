import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import NumberFormat from 'react-number-format';
import { Grid } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStyleTypography = makeStyles({
    root: {
      width: '50%',
      maxWidth: 200,
    },
  });

export default function CountriesData() {
  const classes = useStyles();
  const classTypography = useStyleTypography();


  const [CountryData, SetCountryData] = useState();
 
  useEffect(()=> {
      async function fetchCountrydata() {
          
          const CountryAPIresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
          console.log(CountryAPIresponse)
          const countryDatafromAPI = await CountryAPIresponse.json();
          console.log(countryDatafromAPI);
          SetCountryData(countryDatafromAPI)
          }
          fetchCountrydata(); 
  },[])

  return (
    <div className={classes.root}>
      <Grid container > 
      <Grid item xs = {12} > 
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 

                    <Typography variant="h5" gutterBottom style = {{color: 'black)', fontWeight: "bold"}}>
                    {CountryData && CountryData.countryitems[0] && CountryData.countryitems[0][118].title}
                    </Typography>
          </div>
        </Paper>
      </Grid>
      </Grid>

      <Grid container spacing={2} >
        <Grid item xs = {4} > 
        <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'black', fontWeight: "bold"}}>
                    {CountryData && CountryData.countryitems[0] && CountryData.countryitems[0][118].total_cases}                

                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'black)', fontWeight: "bold"}}>
                           Total Cases
                    </Typography>
          </div>
        </Paper>
          </Grid>
        <Grid item xs = {4} > 
        <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'black', fontWeight: "bold"}}>
                    {CountryData && CountryData.countryitems[0] && CountryData.countryitems[0][118].total_recovered}               

                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'black)', fontWeight: "bold"}}>
                    Recovered
                    </Typography>
          </div>
        </Paper>
         </Grid>
        <Grid item xs = {4} > 
        <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'black', fontWeight: "bold"}}>
                    {CountryData && CountryData.countryitems[0] && CountryData.countryitems[0][118].total_deaths}                  
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'black)', fontWeight: "bold"}}>
                    Deaths
                    </Typography>
          </div>
        </Paper>
        </Grid>


      </Grid>

      </div>
  );
}