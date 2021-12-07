import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import IndicatorHeader from "./IndicatorHeader";
import componentStyles from "../assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function IndicatorBody() {
  const classes = useStyles();
  const theme = useTheme();

  const pieData = {
    labels: ["Domestic", "International", "Bonds", "Cash"],
    datasets: [
      {
        label: "Asset Allocation",
        data: [20.1, 48.5, 14.4, 17],
        backgroundColor: ["blue", "red", "gray", "yellow"],
        borderColor: ["blue", "red", "gray", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "# performance",
        data: [15000, 16000, 13000, 22000, 20000, 25000],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <IndicatorHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
        style={{ paddingTop: 100 }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card>
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h6"
                        letterSpacing=".0625rem"
                        marginBottom=".25rem!important"
                        className={classes.textUppercase}
                      >
                        <Box component="span" color={theme.palette.gray}>
                          Fund Performane
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span" color={theme.palette.white}>
                          Performance
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="relative">
                  <Line data={lineData} options={options} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                title={
                  <Box component="span" color={theme.palette.gray}>
                    Overview
                  </Box>
                }
                subheader="Asset Allocation"
                classes={{ root: classes.cardHeaderRoot }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  letterSpacing: ".0625rem",
                  marginBottom: ".25rem!important",
                  classes: {
                    root: classes.textUppercase,
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  marginBottom: "0!important",
                  color: "initial",
                }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="relative">
                  <Pie data={pieData} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Pending Transactions
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                        style={{ fontSize: "bold" }}
                      >
                        FUND NAME
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        UNITS
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        STATUS
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        BOUNCE RATE
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Nova Money Market Fund
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        4,569
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            60%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={60}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Nova Dollar Fund
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,513
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            70%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={70}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.warning.main}
                        />
                        36,49%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Ethical Traded Fund
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        2,050
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            82%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={82}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        50,87%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Nova Dollar Fund
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        1,795
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            91%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={91}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={
                          classes.tableCellRoot +
                          " " +
                          classes.borderBottomUnset
                        }
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.error.main}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default IndicatorBody;
