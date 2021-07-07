import {
  List,
  Typography,
  Box,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

    '& .MuiTypography-h5': {
      margin: '20px 0 10px',
    },

    '& .MuiList-root': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
    },

    '& .MuiListItem-button': {
      '& .arrow-icon': {
        minWidth: 'auto',
        paddingRight: '5px',
        transition: '0.2s',
      },
  
      '&:hover': {
        '& .arrow-icon': {
          paddingRight: 0,
        },
      },
    },

    '& .MuiTypography-body2': {
      textTransform: 'lowercase',
      color: theme.palette.secondary.main,
    },
  },
  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    placeContent: 'space-between',

    '& .MuiIconButton-root': {
      width: '50px',
      height: '50px',
    }
  },
}));

const DefaultList = ({ title, titleAdornment, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.boxTitle}>
        <Typography variant="h5">{title}</Typography>
        {titleAdornment && titleAdornment}
      </Box>
      <List component="nav">
        {children}
      </List>
    </div>
  );
};

export default DefaultList;
