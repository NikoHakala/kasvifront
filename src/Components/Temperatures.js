import React from 'react';
import { Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Temperatures = () => {
    
    //pull Temps from raspberry pi. No backend yet
    //display them with this component

    return (
        <div>
            <Typography variant="h4">
                <AcUnitIcon/>68 C
            </Typography>
        </div>
    );
};


export default Temperatures;