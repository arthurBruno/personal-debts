import { useState } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DefaultList from '../molecules/DefaultList';
import ModalAddDebt from '../molecules/ModalAddDebt';
import DebtItem from './DebtItem';
import api from '../../functions/api';

const DebtsList = ({
  debts,
  selectedUser,
  allUsers,
  getUsersAndDebts,
  getDebts,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const buttonAdd = () => (
    <Tooltip title="Adicionar dívida" arrow>
      <IconButton onClick={() => setModalOpen(true)}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  const handleDeleteDebt = async (debtId) => {
    console.log('teste', debtId)
    await api.deleteDebt(debtId);
    getUsersAndDebts();
  };

  return (
    <>
      <DefaultList
        title={selectedUser ? `Dívidas - ${selectedUser.name}` : 'Dívidas'}
        titleAdornment={buttonAdd()}
      >
        {debts.map((debt) => (
          <DebtItem
            debt={debt}
            key={debt._id}
            handleDeleteDebt={handleDeleteDebt}
          />
        ))}
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
