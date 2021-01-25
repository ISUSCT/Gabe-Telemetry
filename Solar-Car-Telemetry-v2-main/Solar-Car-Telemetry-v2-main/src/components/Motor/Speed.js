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
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa"


var currentSpeed = '69 MPH'
var avgSpeed = '26 MPH'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  avgSpeedIcon: {
    color: colors.green[900],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },

  VoltageValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));


const Speed = ({ className, ...rest }) => {
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
              Speed
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {currentSpeed}
            </Typography>
          </Grid>
          
          <Grid item>
            <Avatar className={classes.avatar}>
              <FaIcons.FaStopwatch />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
         
         <GiIcons.GiSpeedBoat className={classes.avgSpeedIcon} />
          <Typography
            className={classes.avgSpeedValuie}
            variant="body1"          >
            Average Speed :
          </Typography>
          <Typography
            variant="body2"
          >
            {avgSpeed}
          </Typography>
          
        </Box>
        

      </CardContent>
    </Card>
  );
};

Speed.propTypes = {
  className: PropTypes.string
};

export default Speed;