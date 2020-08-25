import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import NumberFormat from 'react-number-format';




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

export default function GlobalData() {

    
  const classes = useStyles();
  const classTypography = useStyleTypography();

  const [globalData, SetGlobalData] = useState();
  const total_cases = globalData && globalData.total_cases
  const total_unresolved = globalData && globalData.total_unresolved;
  const total_recovered = globalData &&  globalData.total_recovered
  const total_deaths = globalData && globalData.total_deaths 

  const [dataLoading, SetDataLoading] = useState(false);

    useEffect(()=> {
        async function fetchGlobaldata() {
            SetDataLoading(true);
            const APIresponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const datafromAPI = await APIresponse.json();
            SetGlobalData(datafromAPI.results[0])
            SetDataLoading(false);
        }
        fetchGlobaldata(); 
    },[])

    if (dataLoading) {
        return (
            <div className={classes.root}>
              <Paper elevation = {3}> 
                  <div className = {classTypography.root}> 
                            <Typography variant="h4" gutterBottom style = {{color: 'black', fontWeight: "bold"}}>
                            Loading...
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom style = {{color: 'black)', fontWeight: "bold"}}>
                                   Global Data
                            </Typography>
                  </div>
                </Paper>
                <Paper elevation = {3}>
                  <div className = {classTypography.root} > 
                            <Typography variant="h4" gutterBottom style = {{color: 'rgba(0,0,255,0.5)' , fontWeight: "bold"}} >
                            Loading...
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(0,0,255,0.5)' , fontWeight: "bold"}}>
                                    Active
                            </Typography>
                  </div>
              </Paper>
              <Paper elevation = {3}> 
                  <div className = {classTypography.root}> 
                            <Typography variant="h4" gutterBottom style = {{color: 'rgba(0,255,0,0.5)', fontWeight: "bold"}}>
                            Loading...
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(0,255,0,0.5)', fontWeight: "bold"}}>
                                    Recovered
                            </Typography>
                  </div>
              </Paper>
              <Paper elevation = {3}> 
                  <div className = {classTypography.root}> 
                            <Typography variant="h4" gutterBottom style = {{color: 'rgba(255,69,0,1)', fontWeight: "bold"}}>
                                Loading...
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(255,69,0,1)', fontWeight: "bold"}}>
                                   Fatalities
                            </Typography>
                  </div>
              </Paper>
              </div>
          );
}


return (
    <div className={classes.root}>
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'black', fontWeight: "bold"}}>
                    <CountUp
                    start = {0}
                    end = {total_cases}
                    duration = {2.5}
                    separator = ","
                    />                       

                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'black)', fontWeight: "bold"}}>
                           Global Data
                    </Typography>
          </div>
        </Paper>
        <Paper elevation = {3}>
          <div className = {classTypography.root} > 
                    <Typography variant="h4" gutterBottom style = {{color: 'rgba(0,0,255,0.5)' , fontWeight: "bold"}} >
                    <CountUp
                    start = {0}
                    end = {total_unresolved}
                    duration = {2.5}
                    separator = ","
                    />
 
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(0,0,255,0.5)' , fontWeight: "bold"}}>
                            Active
                    </Typography>
          </div>
      </Paper>
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'rgba(0,255,0,0.5)', fontWeight: "bold"}}>
                    <CountUp
                    start = {0}
                    end = {total_recovered}
                    duration = {2.5}
                    separator = ","
                    />  
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(0,255,0,0.5)', fontWeight: "bold"}}>
                            Recovered
                    </Typography>
          </div>
      </Paper>
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'rgba(255,69,0,1)', fontWeight: "bold"}}>
                    <CountUp
                    start = {0}
                    end = {total_deaths}
                    duration = {2.5}
                    separator = ","
                    />
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(255,69,0,1)', fontWeight: "bold"}}>
                           Fatalities
                    </Typography>
          </div>
      </Paper>
      </div>
  );
}