import { useState } from 'react';
import { Box, IconButton, Tooltip, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import DebtItem from './DebtItem';
import DefaultList from '../molecules/DefaultList';
import ModalAddDebt from '../molecules/ModalAddDebt';
import WarnDebts from '../atoms/WarnDebts';
import api from '../../functions/api';

const useStyles = makeStyles({
  returnButton: {
    '@media (min-width: 959px)': {
      display: 'none',
    },
  },
});

const DebtsList = ({
  debts,
  selectedUser,
  setSelectedUser,
  allUsers,
  getUsersAndDebts,
  getDebts,
}) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const buttonReturn = () => (
    <Box className={classes.returnButton}>
      <Tooltip title="Retornar" arrow>
        <IconButton onClick={() => setSelectedUser(null)}>
          <ArrowBackIcon color="primary" />
        </IconButton>
      </Tooltip>
    </Box>
  );

  const buttonAdd = () => (
    <Tooltip title="Adicionar dívida" arrow>
      <IconButton onClick={() => setModalOpen(true)}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  const handleDeleteDebt = async (debtId) => {
    await api.deleteDebt(debtId);
    getUsersAndDebts();
  };

  return (
    <>
      <DefaultList
        title={selectedUser ? `Dívidas - ${selectedUser.name}` : 'Dívidas'}
        titleLeftAdornment={buttonReturn()}
        titleRightAdornment={buttonAdd()}
      >
        {debts.map((debt) => (
          <DebtItem
            debt={debt}
            key={debt._id}
            handleDeleteDebt={handleDeleteDebt}
            allUsers={allUsers}
            getDebts={getDebts}
            selectedUser={selectedUser}
          />
        ))}

        {debts.length <= 0 && <WarnDebts />}
      </DefaultList>

      <ModalAddDebt
        open={modalOpen}
        setOpen={setModalOpen}
        allUsers={allUsers}
        selectedUser={selectedUser}
        getUsersAndDebts={getUsersAndDebts}
      />
    </>
  );
};

export default DebtsList;
