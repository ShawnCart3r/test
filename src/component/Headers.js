import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Collapse} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

    },
    appbar: {
        background: 'none',

    },
    appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    },
    appbarTitle: {
        flexGrow: '1',
    },

    colorText:{
        color: "#5AFF3D"
    },
    container: {
        textAlign: 'center',

    },

    title: {
        color: '#fff',
        fontSize: '3rem',

    },


}));

export default function Headers() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
setChecked(true);
    }, [])
    return (
        <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
             <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}><span className={classes.colorText}>Burlington.</span></h1>
            <IconButton>
               <h5> blah </h5> 
            </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
            <h1 className={classes.title}>Welcome to <br/> <span className={classes.colorText}>Burlington</span></h1>
            <IconButton>
                
            </IconButton>
        </div>
        </Collapse>
        </div>
    );
}