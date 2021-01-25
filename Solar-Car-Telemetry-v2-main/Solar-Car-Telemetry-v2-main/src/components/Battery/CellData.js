import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
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

const CellData = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  // tried to use list comprehension to generate mock data, javascript makes it complicated 
  const data = {
    datasets: [
      {
        backgroundColor: colors.green[600],
        data: [36.2, 37.8, 33.2,35.2,37.1, 36.1,36.2, 37.8, 33.2,35.2,37.1, 36.1
          ,36.2, 37.8, 33.2,35.2,37.1, 36.1,36.2, 37.8, 33.2,35.2,37.1, 36.1
          ,36.2, 37.8, 33.2,35.2,37.1, 36.1],
        label: 'Voltage'
      },
    ],
    labels: ['Pack 1', 'Pack 2', 'Pack 3', 'Pack 4', 'Pack 5', 'Pack 6'
    ,'Pack 7', 'Pack 8', 'Pack 9', 'Pack 10', 'Pack 11', 'Pack 12'
    ,'Pack 13', 'Pack 14', 'Pack 15', 'Pack 16', 'Pack 17', 'Pack 18'
    ,'Pack 19', 'Pack 20', 'Pack 21', 'Pack 22', 'Pack 23', 'Pack 24'
    ,'Pack 25', 'Pack 26', 'Pack 27', 'Pack 28', 'Pack 29', 'Pack 30']
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
          height={400}
          position="relative"
        >
          <Grid>
        <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Cell Data
            </Typography>
            </Grid>

        </Grid>
          <Bar
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

CellData.propTypes = {
  className: PropTypes.string
};

export default CellData;