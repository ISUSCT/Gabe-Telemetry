import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  maxVoltageIcon: {
    color: colors.green[900]
  },
  minVoltageIcon: {
    color: colors.red[900]
  },
  VoltageValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));
var currentVoltage = '137.54 Volts'
var minVoltage = '130.54 Volts'
var maxVoltage = '142.54 Volts'

const Voltage = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Voltage
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {currentVoltage}
            </Typography>
          </Grid>
          
          <Grid item>
            <Avatar className={classes.avatar}>
              <FaIcons.FaCarBattery />

            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
         
         <AiIcons.AiOutlineArrowUp className={classes.maxVoltageIcon} />
          <Typography
            className={classes.maxVoltageValue}
            variant="body2"          >
            Max Voltage :
          </Typography>
          <Typography
            variant="body3"
          >
            {maxVoltage}
          </Typography>
          
        </Box>
        
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
         
         <AiIcons.AiOutlineArrowDown className={classes.minVoltageIcon} />
          <Typography
            className={classes.voltageLabel}
            variant="body2"
          >
            Min Voltage :
          </Typography>
          <Typography
            variant="body3"
          >
            {minVoltage}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Voltage.propTypes = {
  className: PropTypes.string
};

export default Voltage;