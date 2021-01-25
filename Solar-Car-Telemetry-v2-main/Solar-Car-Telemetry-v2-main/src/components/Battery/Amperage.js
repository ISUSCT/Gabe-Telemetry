import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import * as GiIcons from "react-icons/gi";
import * as MdIcons from 'react-icons/md';

var amperage = '42.12 Amps'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
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


const Amperage = ({ className, ...rest }) => {
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
              Amperage
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {amperage}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MdIcons.MdPower />
            </Avatar>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
};

Amperage.propTypes = {
  className: PropTypes.string
};

export default Amperage;