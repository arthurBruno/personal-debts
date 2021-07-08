import {
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';
import NoteIcon from '@material-ui/icons/Note';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    placeItems: 'center',
    padding: '30px',
    textAlign: 'center',

    '& .MuiSvgIcon-root': {
      fontSize: '4rem',
      marginBottom: '10px',
    },

    '& .MuiTypography-body2': {
      textTransform: 'initial',
    },
  },
});

const WarnDebts = ({ users, handleUserClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <NoteIcon />
      <Typography variant="body1">Não há dívidas</Typography>
      <Typography variant="body2">Crie uma para começar</Typography>
    </Box>
  );
};

export default WarnDebts;
