import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

export default function CountriesData({ x }) {

  const classes = useStyles();
  const classTypography = useStyleTypography();

  const [fetchedCountryData, SetfetchedCountryData] = useState([{}]);

  useEffect(() => {
    async function fetchedCountryData() {
      const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
      const countriesData = await Countryresponse.json();
      SetfetchedCountryData(countriesData.countryitems[0])

    }
    fetchedCountryData();
  }, [SetfetchedCountryData])

  const name = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].title
  const cases = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_cases
  const recovered = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_recovered
  const deaths = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_deaths


  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} >
          <Paper elevation={3}>
            <div className={classTypography.root}>

              <Typography variant="h5" gutterBottom style={{ color: 'black)', fontWeight: "bold" }}>
                {name}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} >

        <Grid item xs={4} >
          <Paper elevation={3}>
            <div className={classTypography.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>
                                {cases}
              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'black)', fontWeight: "bold" }}>
                Total Cases
                    </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4} >
          <Paper elevation={3}>
            <div className={classTypography.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>
                            {recovered}

              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'black)', fontWeight: "bold" }}>
                Total Recoveries
                    </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper elevation={3}>
            <div className={classTypography.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>
                         {deaths}

              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'black)', fontWeight: "bold" }}>
                Total Deaths
              </Typography>

            </div>
          </Paper>
        </Grid>


      </Grid>

    </div>
  );
}

