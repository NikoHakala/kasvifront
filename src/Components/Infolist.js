import React from 'react';
import Systeminfo from './Systeminfo';
import Phreadings from './Phreadings';
import Temperatures from './Temperatures';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';




const Infolist = () => {

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 140,
          width: 100,
        },
        control: {
          padding: theme.spacing(2),
        },
      }));

    return (
        <div style={{ padding:11, background:"GhostWhite"}}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Paper><Systeminfo/></Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper><Temperatures/></Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper><Phreadings/></Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Infolist;