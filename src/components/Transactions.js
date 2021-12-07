import React, { useEffect } from "react";
import { FadeTransform } from "react-animation-components";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  userFailed,
  userLoading,
  addHistory,
} from "../redux/ActionCreators";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { useContainedCardHeaderStyles } from "@mui-treasury/styles/cardHeader/contained";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

export default function Transactions() {
  useEffect(() => {
    User();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const history = useSelector((state) => state.history);

  const User = () => {
    let adress = `${auth.id}`;

    dispatch(userLoading());

    return fetch(baseUrl + `users/${adress}`)
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((user) => {
        dispatch(addUser(user));
        dispatch(addHistory(user));
      })
      .catch((error) => dispatch(userFailed(error.message)));
  };

  const useStyles = makeStyles(({ spacing, palette }) => ({
    card: {
      marginTop: 40,
      borderRadius: spacing(0.5),
      transition: "0.3s",
      width: "100%",
      overflow: "initial",
      background: "#ffffff",
      borderTopLeftRadius: 75,
      borderBottomLeftRadius: 75,
      borderBottomRightRadius: 75,
    },
    content: {
      paddingTop: 0,
      textAlign: "left",
      overflowX: "auto",
      "& table": { marginBottom: 0 },
    },
    header: {
      backgroundColor: "#4682B4",
    },
    card1: {
      borderRadius: 12,
      minWidth: 256,
      textAlign: "center",
    },
    avatar: {
      width: 60,
      height: 60,
      margin: "auto",
    },
    heading: {
      fontSize: 18,
      fontWeight: "bold",
      letterSpacing: "0.5px",
      marginTop: 8,
      marginBottom: 0,
    },
    subheader: {
      fontSize: 14,
      color: palette.grey[500],
      marginBottom: "0.875em",
    },
    statLabel: {
      fontSize: 12,
      color: palette.grey[500],
      fontWeight: 500,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      margin: 0,
    },
    statValue: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 4,
      letterSpacing: "1px",
    },
  }));

  const TranxHeader = React.memo(function ElevatedHeaderCard() {
    const classes = useStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });

    return (
      <Card className={cx(classes.card, cardShadowStyles.root)}>
        <CardHeader className={classes.header} classes={cardHeaderStyles}>
          <Typography
            variant="h6"
            align="center"
            component="h6"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Transaction Information
          </Typography>
        </CardHeader>
        <CardContent className={classes.content}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.heading}>Category</TableCell>
                <TableCell className={classes.heading} align="right">
                  Format
                </TableCell>
                <TableCell className={classes.heading} align="right">
                  Value
                </TableCell>
                <TableCell className={classes.heading} align="right">
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.history.slice(0, 4).map((history) => (
                <TableRow key={history.id}>
                  <TableCell component="th" scope="row">
                    {history.category}
                  </TableCell>
                  <TableCell align="right">{history.format}</TableCell>
                  <TableCell align="right">{history.value}</TableCell>
                  <TableCell align="right">{history.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  });

  const TranxStatus = React.memo(function ProfileCard() {
    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
      borderColor: "rgba(0, 0, 0, 0.08)",
      height: "50%",
    });
    return (
      <Card className={cx(styles.card, shadowStyles.root)}>
        <CardContent>
          <h3 className={styles.heading}> Transaction Details</h3>
          <span className={styles.subheader}>By Status</span>
        </CardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Transactions in Progress</p>
            <p className={styles.statValue}>{user.user.progress}</p>
          </Box>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Total Transactions</p>
            <p className={styles.statValue}>{user.user.total}</p>
          </Box>
        </Box>
      </Card>
    );
  });

  const TranxType = React.memo(function ProfileCard() {
    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
      borderColor: "rgba(0, 0, 0, 0.08)",
      height: "50%",
    });
    return (
      <Card className={cx(styles.card, shadowStyles.root)}>
        <CardContent>
          <h3 className={styles.heading}> Transaction Details</h3>
          <span className={styles.subheader}>By Type</span>
        </CardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Affordable</p>
            <p className={styles.statValue}>0</p>
          </Box>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Premium</p>
            <p className={styles.statValue}>0</p>
          </Box>
        </Box>
      </Card>
    );
  });

  if (user.isLoading) {
    return <Loading />;
  } else if (user.errMess) {
    return (
      <div>
        <div>{user.errMess}</div>
      </div>
    );
  } else {
    return (
      <div className="container" style={{ paddingBottom: 20 }}>
        <div>
          <React.Fragment>
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <Card
                border="light"
                style={{
                  backgroundColor: "#4682B4",
                  borderBottomRightRadius: 75,
                }}
              >
                <CardContent
                  style={{
                    borderBottomRightRadius: 75,
                    justifyContent: "space-between",
                  }}
                >
                  <CardHeader>
                    <Typography
                      variant="h6"
                      align="left"
                      component="h6"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      👋 Welcome back, {user.user.lastname}{" "}
                      {user.user.firstname} !
                    </Typography>
                  </CardHeader>
                  <div className="text-left">
                    <img
                      src="assets/images/profile.png"
                      alt="Failed to Load"
                      style={{
                        marginTop: 5,
                        marginLeft: 10,
                        width: 120,
                        height: 120,
                        borderRadius: 50,
                      }}
                    />
                  </div>
                  <div className="text-right">
                    <Typography
                      variant="h6"
                      align="right"
                      component="h6"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 30,
                      }}
                    >
                      ₦ {user.user.balance.toLocaleString()}
                    </Typography>
                  </div>
                </CardContent>
                <CardContent
                  style={{ backgroundColor: "white", borderTopLeftRadius: 75 }}
                >
                  <TranxHeader />
                </CardContent>
                <CardContent
                  style={{ backgroundColor: "white", borderTopLeftRadius: 75 }}
                >
                  <TranxStatus />
                </CardContent>
                <CardContent
                  style={{ backgroundColor: "white", borderTopLeftRadius: 75 }}
                >
                  <TranxType />
                </CardContent>
              </Card>
            </FadeTransform>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
