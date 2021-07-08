import { useState } from 'react';
import {
  Box,
  ListItem,
  IconButton,
  Typography,
  Tooltip,
  makeStyles,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import EditDebt from '../molecules/EditDebt';
import { floatToCurrency } from '../../functions/utils/money';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'grid',
    gridTemplateColumns: '100%',
    position: 'relative',
    borderBottom: `${theme.palette.grey.main} solid 1px`,

    '&:last-child': {
      borderBottom: 'none',
    },
    
    '& .currency': {
      textAlign: 'end',
      transition: '0.2s',
    },

    '& .item-data': {
      display: 'flex',
      placeContent: 'space-between',
      alignItems: 'center',

      '@media (max-width: 959px)': {
        display: 'grid',
        gridTemplateColumns: '100%',
      },
    },

    '& .buttons': {
      position: 'absolute',
      right: 0,
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
      '& .currency-hover': {
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

const DebtItem = ({
  debt,
  handleDeleteDebt,
  allUsers,
  getDebts,
  selectedUser,
}) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <ListItem className={classes.item}>
      <Box className="item-data">
        <Box>
          <Typography variant="body1">{debt.motivo}</Typography>
          <Typography variant="body2">Criado em: {moment(debt.criado).format('DD MMM YYYY')}</Typography>
        </Box>

        <Box className={`currency ${!isEditing && 'currency-hover'}`}>
          <Typography variant="subtitle1">{floatToCurrency(debt.valor)}</Typography>
        </Box>
      </Box>

      {!isEditing && (
        <Box className="buttons">
          <Tooltip title="Editar" arrow>
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon className="edit-icon" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Excluir" arrow>
            <IconButton onClick={() => handleDeleteDebt(debt._id)}>
              <DeleteIcon className="delete-icon" />
            </IconButton>
          </Tooltip>
        </Box>
      )}

      <EditDebt
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        debt={debt}
        allUsers={allUsers}
        getDebts={getDebts}
        selectedUser={selectedUser}
      />
    </ListItem>
  );
};

export default DebtItem;
