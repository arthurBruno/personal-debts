import moment from 'moment';
import {
  Box,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Tooltip,
  makeStyles,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { floatToCurrency } from '../../functions/utils/money';

const useStyles = makeStyles((theme) => ({
  item: {
    position: 'relative',
    borderBottom: `${theme.palette.grey.main} solid 1px`,

    '&:last-child': {
      borderBottom: 'none',
    },
    
    '& .currency': {
      textAlign: 'end',
      transition: '0.2s',
    },
    
    '& .buttons': {
      position: 'absolute',
      right: -20,
      transition: '0.2s',
      opacity: 0,
      
      '& .MuiIconButton-root:hover': {
        '& .edit-icon': {
          fill: theme.palette.primary.main,
        },
        
        '& .delete-icon': {
          fill: theme.palette.error.main,
        },
      },
    },
    
    '&:hover': {
      '& .currency': {
        paddingRight: '110px',
      },
      
      '& .buttons': {
        position: 'absolute',
        right: 15,
        opacity: 1,
      },
    },
  },
}));

const DebtItem = ({ debt, handleDeleteDebt }) => {
  const classes = useStyles();

  const handleEditClick = () => {
    console.log('edit')
  };
  
  return (
    <ListItem className={classes.item}>
      <ListItemText>
        <Typography variant="body1">{debt.motivo}</Typography>
        <Typography variant="body2">Criado em: {moment(debt.criado).format('DD MMM YYYY')}</Typography>
      </ListItemText>

      <ListItemText className="currency">
        <Typography variant="subtitle1">{floatToCurrency(debt.valor)}</Typography>
      </ListItemText>

      <Box className="buttons">
        <Tooltip title="Editar" arrow>
          <IconButton onClick={handleEditClick}>
            <EditIcon className="edit-icon" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Excluir" arrow>
          <IconButton onClick={() => handleDeleteDebt(debt._id)}>
            <DeleteIcon className="delete-icon" />
          </IconButton>
        </Tooltip>
      </Box>
    </ListItem>
  );
};

export default DebtItem;
