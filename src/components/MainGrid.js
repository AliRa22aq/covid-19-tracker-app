import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData'
import CountriesData from './CountriesData'
import Chart from './Chart'



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
                             <GlobalData />
          </Paper>
        </Grid>


        <Grid item xs = {8}>
            <Grid container spacing={2}>

                    <Grid item xs = {12}> 
                             <CountriesData x = {x} />          
          
                    </Grid>

                    <Grid item xs = {12}> 
            
   
    
                    </Grid>
                </Grid>

        </Grid>

        <Chart  />

      </Grid>

    </div>
  );
}