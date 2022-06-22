import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import './ContactModal.scss';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Grid } from '@mui/material';
import { FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';

const ContactModal = ({ status, handleClose }) => {
  const [contactData, setContactData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleDataUpdate = (e, key) => {
    setContactData({
      ...contactData,
      [key]: e.target.value,
    });
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={status}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ zIndex: 1500 }}
    >
      <Fade in={status}>
        <div className="modalContent">
          <div className="topWrapper">
            <span className="modalTitle">Contact Us</span>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="close-btn"
              onClick={handleClose}
              sx={{ p: 0 }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="formWrapper">
            <form className="form">
              <fieldset className="fieldset">
                <TextField
                  id="name"
                  fullWidth
                  label="Name"
                  variant="standard"
                  value={contactData.name}
                  onChange={(e) => handleDataUpdate(e, 'name')}
                />
                <TextField
                  id="phoneNumber"
                  fullWidth
                  label="Phone Number"
                  variant="standard"
                  value={contactData.phoneNumber}
                  onChange={(e) => handleDataUpdate(e, 'phoneNumber')}
                />
                <TextField
                  id="email"
                  fullWidth
                  label="Email"
                  required
                  variant="standard"
                  value={contactData.email}
                  onChange={(e) => handleDataUpdate(e, 'email')}
                />
                <FormHelperText
                  id="email"
                  sx={{
                    mt: {
                      xs: -1.5,
                      sm: -2,
                    },
                  }}
                >
                  * Valid email address required
                </FormHelperText>
                <TextField
                  id="message"
                  fullWidth
                  label="How can we help you?"
                  variant="standard"
                  value={contactData.message}
                  onChange={(e) => handleDataUpdate(e, 'message')}
                  multiline={true}
                  rows={2}
                />
              </fieldset>
              <Grid container justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ color: '#fff', my: 4, width: '92.55px' }}
                >
                  Submit
                </Button>
              </Grid>
            </form>
            <span className="formDescr">
              Make sure to avoid including any sensitive information you don't want to share with
              this business.
            </span>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ContactModal;
