import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme, createTheme } from '@mui/material/styles';
import Search from './components/Search';
import { useSpring, animated } from '@react-spring/web'
import Box from '@mui/material/Box'
import Landing from './components/Landing'



function App() {

  useEffect(() => {
    fetch("/scrape", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "url": 'https://google.com'
      })
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);


  const light = {
    palette: {
      type: 'light',
      primary: {
        main: '#C36A2D',
      },
      secondary: {
        main: '#76ff03',
      },
      background: {
        default: '#FBFBFB',
        paper: '#1f1f1f',

      },
      error: {
        main: '#FF00C8',
      },
      text: {
        primary: '#000',
      },
      typography: {
        fontFamily: 'Permanent Marker, cursive'
      },
    }
  }
  const appliedTheme = createTheme(light)
  return (
    <BrowserRouter>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
      
        <Landing />
       
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
