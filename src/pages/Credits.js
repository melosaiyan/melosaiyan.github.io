//import logo from './logo.svg';
import '../App.css';
import * as React from 'react';
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import 'react-spring-modal/styles.css';
import Button from '@mui/material/Button';


function Credits() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="Credits">
          <>
          <p>
          </p>
            <Button sx={{ position: 'block', top: '50%' }} variant="contained" className="middleButton" onClick={() => setOpen(true)}>My heart goes out to...</Button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>You Heather.</ModalTitle>
              <p>
                You have always been an amazing human being and a loving wife and a fantastic mother to our children. You have always been so selfess, caring, strong, thoughtful, loving, headstrong, and many other fantastic qualities. It's amazing how every single day I have the greatest opportunity to spend time with you and get to talk about anything and everything. From current events to nerdy things and even watching the Mummy movies, it's fun to be with you. I hope to have the opportunity to spend many more years with you and to have the opportunity to have a more loving and stronger marriage. Even when times get tough, I would like to go through the challenges with you. You are the best and you bring out the best in me. Thank you for being there for me and I will do my best to be there for you and be your big supporter.
              </p>
              <p>
                I love you!
              </p>

              {/* Automatically adds onClick that dismisses modal */}
              <ModalCloseTarget>
                <button>Close</button>
              </ModalCloseTarget>
            </CenterModal>
          </>
    </div>
  );
}

export default Credits;
