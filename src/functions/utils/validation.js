const validation = {
  isDebtValid: ({ user, reason, amount }) => {
    const errors = {};

    if (!user || !user.id) {
      errors.user = 'Escolha um usuário'
    }

    if (!reason || reason === '' || reason === ' ') {
      errors.reason = 'Descreva a dívida'
    }

    if (!amount || amount === 0) {
      errors.amount = 'Digite o valor'
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    return true;
  },
};

export default validation;