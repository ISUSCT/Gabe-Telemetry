import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import {
  Box,
  Button,
  Borders,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



const useStyles = makeStyles(() => ({
  root: {}
}));

const OutputGraph = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();



  const data = {
    datasets: [
      {
        backgroundColor: colors.red[600],
        data: [6,4],
        label: 'Volts'
      },
    ],
    labels: ["on", 'off']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    borderWidth: 20,

    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.primary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [4],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        
        <Box
          height={300}
          position="relative"
        >
          <Grid>
        <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Regenerative Breaking
            </Typography>
            </Grid>

        </Grid>
          <Pie
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
      </Box>
    </Card>
  );
};

OutputGraph.propTypes = {
  className: PropTypes.string
};

export default OutputGraph;