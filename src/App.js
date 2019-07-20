import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MyCard from "./Card";
import discount from "./discount.jpg";
import sk from "@stormkit/api";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "orange"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  container: {
    maxWidth: 1024,
    width: "100%",
    display: "flex",
    padding: "3rem 0",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  promotionWrapper: {
    width: "100%",
    height: 350,
    position: "relative",
    marginBottom: "3rem",
    textAlign: "right"
  },
  promotion: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: `url(${discount})`,
    backgroundSize: "cover",
    zIndex: -1
  },
  promotionText: {
    color: "white",
    padding: "1rem"
  }
}));

const config = sk.config();

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Latest Items
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        {config.promotion === "enabled" && (
          <div className={classes.promotionWrapper}>
            <Typography variant="h3" className={classes.promotionText}>
              Sales
            </Typography>
            <div className={classes.promotion} />
          </div>
        )}
        {[...Array(config.numberOfItems || 6).keys()].map(i => (
          <MyCard key={`card-${i}`} />
        ))}
      </Container>
    </div>
  );
}
