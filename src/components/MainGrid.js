import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData'
import GlobalChart from './GlobalChart'
import CountriesData2 from './CountriesData2' 
import CountryChart from './CountryChart'
import CountryChartDaily from './CountryChartDaily'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid({x}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs = {4}>
          <Paper className={classes.paper}>

              {x? <CountriesData2 x = {x} /> : <GlobalData />}
              
                             
          </Paper>
        </Grid>


        <Grid item xs = {8}>
            <Grid container spacing={4}>

                    <Grid item xs = {12}> 
                    
                            
                    {x? <CountryChart x = {x}/> : <GlobalChart  x={x}/>}
                    <CountryChartDaily x= {x}/>
                    
                                             

                    </Grid>
                </Grid>

        </Grid>



      </Grid>

    </div>
  );
}