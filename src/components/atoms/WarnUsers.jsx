import {
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/EmojiPeopleOutlined';

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
  },
});

const WarnUsers = ({ users, handleUserClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PersonIcon />
      <Typography variant="body1">Não há usuários endividados</Typography>
    </Box>
  );
};

export default WarnUsers;
