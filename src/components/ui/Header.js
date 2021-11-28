import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import logo from "../assets/logo.png";
import {
  AppBar,
  Button,
  CssBaseline,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginTop: "1rem",
  },
  logo: {
    height: "3em",
    marginTop: "0.9rem",
    marginBottom: "0.5rem",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px !important",
    marginLeft: "25px !important",
  },
  button: {
    ...theme.typography.myButton,
    borderRadius: "50px !important",
    minWidth: "10px !important",
    marginLeft: "25px !important",
    padding: "10px 25px !important",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  const handelChange = (e, value) => {
    setValue(value);
  };

  const handelAnchorEl = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/portfolio" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/blog" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  const serviceDropDownItems = [
    ` Mobile app development`,
    `Website development`,
    `Custom software development`,
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Link to="/" onClick={() => setValue(0)}>
              <img className={classes.logo} src={logo} alt=" company logo" />
            </Link>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handelChange}
              textColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
                id="service-dropdown-menu"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseOver={handelAnchorEl}
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/portfolio"
                label="Portfolio"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/blog"
                label="Blog"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact"
              />
            </Tabs>
            <Button variant="contained" className={classes.button}>
              Login
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "service-dropdown-menu",
                onMouseLeave: handleClose,
              }}
            >
              {serviceDropDownItems.map((item, index) => (
                <MenuItem
                  key={item}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolBarMargin} />
    </React.Fragment>
  );
};

export default Header;
