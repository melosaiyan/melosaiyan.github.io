//import logo from './logo.svg';
import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



function Art() {
  const cardBox = (
    <React.Fragment>
      <CardContent>
        <p>
        Your beauty and wonder exceeds all established parameters,<br/>
        when your loving, thoughtful, selfless qualities shine with grace.<br/>
        Your radiant mortality burns more brightly than a blue sun of all matters,<br/>
        and yet the coolest rock girl wannabe anyone could ever face.
        </p>
        <p>
        You light up the room with wonderous exquisiteness,<br/>
        With those piercing blue eyes, the mesmerizing smile, the glow of your essence.<br/>
        And yet your strength and poise to do amazing things come through and it's full of awesomeness,<br/>
        The greatest wife of all time honor goes to you and your presence!
        </p>
        <p>
        I hope this poem describe what I want to tell you,<br/>
        How you prove to be this amazing woman with amazing qualities.<br/>
        I wish to be lucky to continue to be in your presence and no matter what you do,<br/>
        I will do my best to make you happy, support you, and be strong to the best of my abilities!
        </p>
      </CardContent>
      <CardActions sx={{ position: 'absolute', left: 0, bottom: 0}}>
        <Button size="small">Open</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="Art">
          <h1>A poem for Heather</h1>
          <Box sx={{ minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <Card sx={{ backgroundColor: '#4f4f4f', color: '#fff', opacity: '0.8' }} variant="outlined">{cardBox}</Card>
          </Box>
    </div>
  );
}

export default Art;
