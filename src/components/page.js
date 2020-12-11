import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import logo from './images/setting.png';
import customImg from './images/custom.png';
import dashboardImg from './images/dashboard.png';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: red[500],
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid container className="space_btms" >
        <Card className={classes.root} >

          <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                <img src={logo} />;
              </Avatar>
            }
            title="Custom Report"
            subheader="Angular, Node.js, PostgreSQL"
          />
          <CardMedia
            className={classes.media}
            image={customImg}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Interact with this fully tailored BI solution. A customized end-to-end solution using a modern web technology stack: Angular, Node, Express and PostgreSQL.
        </Typography>
          </CardContent>
          <CardActions>
            <LaunchOutlinedIcon marginLeft={"5px"} />
            <span style={{ right: "10px" }}>More</span>
          </CardActions>
        </Card>

        <Card className={classes.root} >

          <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                <img src={logo} />;
    </Avatar>
            }
            title="Custom Report"
            subheader="Angular, Node.js, PostgreSQL"
          />
          <CardMedia
            className={classes.media}
            image={dashboardImg}

          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Reactive client-side processing: each click on a chart results in blazingly fast feedback to the user. No server calls beyond the initial data load.</Typography>
          </CardContent>
          <CardActions>
            <LaunchOutlinedIcon marginLeft={"5px"} />
            <span style={{ right: "10px" }}>More</span>
          </CardActions>
        </Card>

      </Grid>
    </div>
  );
}
