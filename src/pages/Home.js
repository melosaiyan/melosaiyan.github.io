import '../App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Home() {
  const cardBoxHome = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to
        </Typography>
        <Typography variant="h5" component="div">
          Brian's Test Site!
        </Typography>
        <p>
        You may add text here!
        </p>
        <p>
          Or here!
        </p>
        <p>
          Or even here!
        </p>
      </CardContent>
    </React.Fragment>
  );
  const boxStyle = { minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', opacity: '0.9',transform: 'translate(-50%, -50%)' };
  const cardStyle = { backgroundColor: '#100C08', color: '#FFF' }
  return (
    <div className="Home">
      <Box sx={boxStyle}>
        <Card sx={cardStyle} variant="outlined">{cardBoxHome}</Card>
      </Box>
    </div>
  );
}

export default Home;
