import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';

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
        width: '100%',
        maxWidth: 500,
    },
});

export default function CountriesData2({ x }) {


    const classes = useStyles();
    const classTypography = useStyleTypography();



    const [dataLoading, SetDataLoading] = useState(false);
    const [fetchedCountryData, SetfetchedCountryData] = useState();



    useEffect(() => {
        async function fetchedCountryData() {
            SetDataLoading(true);
            const Countryresponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const countriesData = await Countryresponse.json();
            SetfetchedCountryData(countriesData.countryitems[0])
            SetDataLoading(false);
        }
        fetchedCountryData();

    }, [])


    console.log(fetchedCountryData);

    //const country_title = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].title
    const country_cases = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_cases
    const country_recovered = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_recovered
    const country_deaths = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_deaths
    const total_active_cases = fetchedCountryData && fetchedCountryData[x] && fetchedCountryData[x].total_active_cases



    if (dataLoading) {
        return (
            <div className={classes.root}>
                <Paper elevation={3}>
                    <div className={classTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>
                            Loading...
                            </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'black)', fontWeight: "bold" }}>
                            Global Data
                            </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={classTypography.root} >
                        <Typography variant="h4" gutterBottom style={{ color: 'rgba(0,0,255,0.5)', fontWeight: "bold" }} >
                            Loading...
                            </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'rgba(0,0,255,0.5)', fontWeight: "bold" }}>
                            Active
                            </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={classTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'rgba(0,255,0,0.5)', fontWeight: "bold" }}>
                            Loading...
                            </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'rgba(0,255,0,0.5)', fontWeight: "bold" }}>
                            Recovered
                            </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={classTypography.root}>
                        <Typography variant="h4" gutterBottom style={{ color: 'rgba(255,69,0,1)', fontWeight: "bold" }}>
                            Loading...
                            </Typography>
                        <Typography variant="subtitle2" gutterBottom style={{ color: 'rgba(255,69,0,1)', fontWeight: "bold" }}>
                            Fatalities
                            </Typography>
                    </div>
                </Paper>
            </div>
        );
    }


    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={classTypography.root}>
                    <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>

                    <Card height = {100} style={{ backgroundColor: "#42A5F5", padding: 0}}>
                            Total Cases
                        </Card>
                        <div style= {{padding:20}}> 
                        <CountUp start={0} end={country_cases} duration={2.5} separator="," />
                        </div>
                    </Typography>

                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classTypography.root}>
                    <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>

                    <Card height = {100} style={{ backgroundColor: "#FFC300", padding: 0}}>
                            Active Cases
                        </Card>
                        <div style= {{padding:20}}> 
                        <CountUp start={0} end={total_active_cases} duration={2.5} separator="," />
                        </div>
                    </Typography>

                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classTypography.root}>
                    <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>

                    <Card height = {100} style={{ backgroundColor: "#8BC34A", padding: 0}}>
                            Recovered
                        </Card>
                        <div style= {{padding:20}}> 
                        <CountUp start={0} end={country_recovered} duration={2.5} separator="," />
                        </div>
                    </Typography>

                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={classTypography.root}>
                    <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: "bold" }}>

                    <Card height = {100} style={{ backgroundColor: "#E64A19", padding: 0}}>
                            Deaths
                        </Card>
                        <div style= {{padding:20}}> 
                        <CountUp start={0} end={country_deaths} duration={2.5} separator="," />
                        </div>
                    </Typography>

                </div>
            </Paper>

        </div>
    );
}