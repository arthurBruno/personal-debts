
import React from 'react';
import {
  Modal,
  Fade,
  Paper,
  Box,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  paper: {
    width: '40%',
    maxWidth: '810px',
    padding: '30px',
    borderRadius: '5px',

    '@media (max-width:800px)': {
    },
    '@media (max-width:959px)': {
    },
  },
  title: {
    display: 'flex',
    placeContent: 'space-between',
    alignItems: 'center',
  },
}));

const DefaultModal = ({ title, open, setOpen, children }) => {
  const classes = useStyles();
  return (
    <Modal className={classes.modal} open={open} hideBackdrop closeAfterTransition>
      <Fade in={open}>
        <Paper elevation={3} className={classes.paper}>
          <Box className={classes.title}>
            <Typography variant="h5">{title}</Typography>
            <IconButton color="primary" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {children}
        </Paper>
      </Fade>
    </Modal>
  );
};

export default DefaultModal;
