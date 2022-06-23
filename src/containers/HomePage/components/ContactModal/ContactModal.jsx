import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import LoadingButton from '@mui/lab/LoadingButton';
import './ContactModal.scss';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Grid } from '@mui/material';
import { FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { EMAIL_JS } from './constants';

const ContactModal = ({ status, handleClose }) => {
  const [contactData, setContactData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [formLoading, setFormLoading] = useState(false);

  const [emailError, setEmailError] = useState(null);

  const handleDataUpdate = (e, key) => {
    setContactData({
      ...contactData,
      [key]: e.target.value,
    });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setEmailError(null);
    const templateObj = { ...contactData };
    if (!contactData.name) templateObj.name = '-';
    if (!contactData.phoneNumber) templateObj.phoneNumber = '-';
    console.log(templateObj);
    setFormLoading(true);
    try {
      await emailjs.send(
        EMAIL_JS.SERVICE_ID,
        EMAIL_JS.TEMPLATE_ID,
        templateObj,
        EMAIL_JS.PUBLIC_KEY,
      );
      setEmailError(null);
      setFormLoading(false);
      handleClose();
      setContactData({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    } catch (e) {
      setEmailError(e);
      setFormLoading(false);
    }
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
            <form className="form" onSubmit={sendMail}>
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
                  type="email"
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
                  &#x2022; Valid email address required
                </FormHelperText>
                <TextField
                  id="message"
                  fullWidth
                  label="How can we help you?"
                  variant="outlined"
                  required
                  value={contactData.message}
                  onChange={(e) => handleDataUpdate(e, 'message')}
                  multiline={true}
                  rows={3}
                />
              </fieldset>
              <Grid container alignItems="flex-end" flexDirection="column">
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={formLoading}
                  disabled={formLoading}
                  sx={{
                    color: '#fff',
                    my: 3,
                    fontSize: {
                      md: '24px',
                      xs: '18px',
                    },
                    fontWeight: '400',
                    py: {
                      md: '12px',
                      xs: '8px',
                    },
                    px: {
                      md: '28px',
                      xs: '18px',
                    },
                  }}
                >
                  Send
                </LoadingButton>
                {emailError && (
                  <FormHelperText
                    id="email"
                    sx={{
                      my: {
                        xs: -3,
                        sm: -3,
                      },
                    }}
                  >
                    Email was not send, try again!
                  </FormHelperText>
                )}
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
