const debts = {
  filterIndebtedUsers: (allUsers, allDebts) => (
    allUsers.filter((user) => {
      const debtFound = allDebts.find((debt) => debt.idUsuario === user.id);
      return !!debtFound;
    })
  ),
  
  filterDebts: (allDebts, selectedUser) => {
    if (!selectedUser) {
      return [];
    }
    return allDebts.filter((debt) => debt.idUsuario === selectedUser.id);
  },
};

export default debts;
