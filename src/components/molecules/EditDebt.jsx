import { useState } from 'react';
import { Box, Button, Collapse, makeStyles } from '@material-ui/core';
import DebtForm from '../atoms/DebtForm';
import api from '../../functions/api';
import validation from '../../functions/utils/validation';

const useStyles = makeStyles({
  form: {
    margin: '25px 0',

    '& form': {
      display: 'grid',
      gap: '20px',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
});

const EditDebt = ({
  isEditing,
  setIsEditing,
  debt,
  allUsers,
  getDebts,
  selectedUser,
 }) => {
  const classes = useStyles();
  const [user, setUser] = useState(selectedUser);
  const [reason, setReason] = useState(debt.motivo);
  const [amount, setAmount] = useState(debt.valor);
  const [fieldsWithError, setFieldsWithError] = useState({});

  const handleEditClick = async () => {
    const validationResult = validation.isDebtValid({ user, reason, amount });

    if (!validationResult.errors) {
      setIsEditing(false);
      await api.updateDebt(debt._id, user.id, reason, amount);
      getDebts();
    } else {
      setFieldsWithError(validationResult.errors);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUser(selectedUser);
    setReason(debt.motivo);
    setAmount(debt.valor);
  };

  return (
    <Collapse in={isEditing} timeout="auto" unmountOnExit>
      <Box className={classes.form}>
        <DebtForm
          user={user}
          setUser={setUser}
          reason={reason}
          setReason={setReason}
          amount={amount}
          setAmount={setAmount}
          allUsers={allUsers}
          parent={debt._id}
          fieldsWithError={fieldsWithError}
          setFieldsWithError={setFieldsWithError}
        />
      </Box>

      <Box className={classes.buttons}>
        <Button onClick={handleCancelClick} variant="outlined" color="primary">
          Cancelar
        </Button>
        <Button onClick={handleEditClick} variant="contained" color="primary">
          Salvar
        </Button>
      </Box>
    </Collapse>
  );
};

export default EditDebt;
