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
import * as GiIcons from "react-icons/gi";

var estimatedRange = '202 Mi'

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


const EstimatedRange = ({ className, ...rest }) => {
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
              Estimated Range
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {estimatedRange}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <GiIcons.GiPathDistance />
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

EstimatedRange.propTypes = {
  className: PropTypes.string
};

export default EstimatedRange;