import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

import './inPageNav.css'
import '../../shared/globalStyles/global.css'


const useStyles = makeStyles((theme) => ({
  containedPrimary: {
    color: "#ffffff",
    backgroundColor: "#724683",
    '&:hover': {
      backgroundColor: "#fd418d",
    },
  },
}));


// TODO: Uses similar style as navbar. Potentially refactor that with the common code here.
export default function InPageNav(navButtons: Array<Object>) {
    const classes = useStyles();
    return (
        <div className="in-page-nav">
            {navButtons.map((obj, idx) => {
                return (
                    <NavLink to={Object(obj)["link"]}>
                        <Button variant="contained" startIcon={Object(obj)["icon"]} size="large" color="primary" className={classes.containedPrimary}>
                            {Object(obj)["text"]}
                        </Button>
                    </NavLink>
                );
            })}
        </div>
    );
}
