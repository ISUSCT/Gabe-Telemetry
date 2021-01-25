import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Typography
} from '@material-ui/core';



const useStyles = makeStyles(() => ({
  root: {}
}));

const OutputGraph = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();



  const data = {
    datasets: [
      {
        backgroundColor: colors.orange[600],
        data: [36.2, 37.8, 33.2,35.2,37.1, 36.1,36.2, 37.8, 33.2,35.2,37.1, 36.1
          ,36.2, 37.8, 33.2,35.2,37.1,35.2],
        label: 'Volts'
      },
    ],
    labels: ['12:20', '12:30', '12:40', '12:50', '1:00', '1:10'
    ,'1:20', '1:30', '1:40', '1:50', '2:00', '2:10'
    ,'2:20', '2:30', '2:40', '2:50', '3:00', '3:10']
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
            display: true,
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
              Output Over Past 3 Hours
            </Typography>
            </Grid>
        </Grid>
          <Line
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