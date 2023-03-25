//import logo from './logo.svg';
import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



function Art() {
  const cardBox = (
    <React.Fragment>
      <CardContent>
        <p>
        Test text 1<br/>
        Test text 2<br/>
        Test text 3,<br/>
        Test text 4.
        </p>
        <p>
        Test text 1<br/>
        Test text 2<br/>
        Test text 3,<br/>
        Test text 4.
        </p>
        <p>
        Test text 1<br/>
        Test text 2<br/>
        Test text 3,<br/>
        Test text 4.
        </p>
      </CardContent>
      <CardActions sx={{ position: 'absolute', left: 0, bottom: 0}}>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="Art">
          <h1>A poem template</h1>
          <Box sx={{ minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <Card sx={{ backgroundColor: '#4f4f4f', color: '#fff', opacity: '0.8' }} variant="outlined">{cardBox}</Card>
          </Box>
    </div>
  );
}

export default Art;
