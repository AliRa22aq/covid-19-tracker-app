import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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

  return (
    <div className={classes.root}>
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom>
                            100
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                            Global Data
                    </Typography>
          </div>
        </Paper>
        <Paper elevation = {3}>
          <div className = {classTypography.root} > 
                    <Typography variant="h4" gutterBottom style = {{color: 'rgba(0,0,255,0.5)' , fontWeight: "bold"}} >
                            100
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(0,0,255,0.5)' , fontWeight: "bold"}}>
                            Active
                    </Typography>
          </div>
      </Paper>
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'rgba(0,255,0,0.5)', fontWeight: "bold"}}>
                            100
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(0,255,0,0.5)', fontWeight: "bold"}}>
                            Recovered
                    </Typography>
          </div>
      </Paper>
      <Paper elevation = {3}> 
          <div className = {classTypography.root}> 
                    <Typography variant="h4" gutterBottom style = {{color: 'rgba(255,69,0,1)', fontWeight: "bold"}}>
                            100
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style = {{color: 'rgba(255,69,0,1)', fontWeight: "bold"}}>
                           Fatalities
                    </Typography>
          </div>
      </Paper>
      </div>
  );
}