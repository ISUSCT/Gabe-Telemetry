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
import * as RiIcons from "react-icons/ri";


var latitude = '-40.2122'
var longitude = '80.2122'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.brown[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));


const Coordinates = ({ className, ...rest }) => {
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
              Latitude
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {latitude}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Longitude
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {longitude}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <RiIcons.RiMapPin2Line />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
         
          <Typography
            color="textSecondary"
            variant="caption"
          >
            
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Coordinates.propTypes = {
  className: PropTypes.string
};

export default Coordinates;