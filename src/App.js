import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Headers from './component/Headers';
import PlacesToVisit from './component/PlacesToVisit';


const useStyles = makeStyles(( theme ) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/image/1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
  },

}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline/>
    <Headers/>
    <PlacesToVisit/>

    </div>
  )
}