import { useState } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import DefaultModal from '../atoms/DefaultModal';
import DebtForm from '../atoms/DebtForm';
import validation from '../../functions/utils/validation';
import api from '../../functions/api';
import { useEffect } from 'react';

const useStyles = makeStyles({
  form: {
    margin: '25px 0',

    '& form': {
      display: 'grid',
      gap: '20px',
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '25px',
  },
});

const ModalAddDebt = ({
  open,
  setOpen,
  allUsers,
  selectedUser,
  getUsersAndDebts,
}) => {
  const classes = useStyles();
  const [user, setUser] = useState(selectedUser);
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState(0);
  const [fieldsWithError, setFieldsWithError] = useState({});

  useEffect(() => {
    if (selectedUser && (!user || user.id !== selectedUser.id)) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleAddClick = async () => {
    const validationResult = validation.isDebtValid({ user, reason, amount });

    if (!validationResult.errors) {
      setOpen(false);
      await api.createDebt(user, reason, amount);
      getUsersAndDebts();
      setUser(selectedUser);
      setReason('');
      setAmount(0);
    } else {
      setFieldsWithError(validationResult.errors);
    }
  };

  return (
    <DefaultModal title="Adicionar dívida" open={open} setOpen={setOpen}>
      <Box className={classes.form}>
        <DebtForm
          user={user}
          setUser={setUser}
          reason={reason}
          setReason={setReason}
          amount={amount}
          setAmount={setAmount}
          allUsers={allUsers}
          parent="modal"
          fieldsWithError={fieldsWithError}
          setFieldsWithError={setFieldsWithError}
        />
      </Box>

      <Box className={classes.button}>
        <Button onClick={handleAddClick} variant="contained" color="primary">
          Adicionar
        </Button>
      </Box>
    </DefaultModal>
  );
};

export default ModalAddDebt;
