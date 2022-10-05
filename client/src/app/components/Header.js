import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../store";
axios.defaults.withCredentials = true;

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:3001/funderr/logout", null, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };

  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };

  const [value, setValue] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3">Funderr</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              {!isLoggedIn && (
                <Tab value="1" label="Login" to="/login" LinkComponent={Link} />
              )}
              {!isLoggedIn && (
                <Tab
                  value="2"
                  label="Sign Up"
                  to="/signup"
                  LinkComponent={Link}
                />
              )}
              {isLoggedIn && (
                <Tab
                  value="1"
                  label="Log Out"
                  to="/"
                  LinkComponent={Link}
                  onClick={handleLogout}
                />
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
