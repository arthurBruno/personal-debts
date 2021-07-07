import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
}));

const LettersAvatar = ({ name }) => {
  const classes = useStyles();

  const renderName = () => {
    const [firstName, lastName] = name.split(' ');

    if (firstName && lastName) {
      return firstName[0] + lastName[0];
    }

    return null;
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>{renderName()}</Avatar>
    </div>
  );
};

export default LettersAvatar;
