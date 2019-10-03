import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Infolist from './Components/Infolist';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">
            KasviSetti
          </Typography>
        </Toolbar>
      </AppBar>
      <Infolist/>
    </div>
  );
}

export default App;
