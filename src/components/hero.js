import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import heroVideo from '../assets/images/istockphoto-1206589430-640_adpp_is.mp4';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(20),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h4" component="h1" className={classes.title}>
          Welcome to Nova Asset Management

          </Typography>
          <p style={{                  paddingBottom: 50
}}>          We Offer Mutual Funds, Structured Products, Portfolio Administration Service and Trustee Services.
</p>
          <Link to={`/register`}>
            <button className="btn btn-md btn-info" style={{
                  width: 250,
                  backgroundColor: "#4682B4",
                  padding: 15,
                  justifyContent: "center",
                  marginBottom: 20,
                  borderRadius: 24,
                }}>
                 Register Now
            </button>
          </Link>
        </Box>
      </div>
    </section>
  );
};

export default Hero;
