import { TextField, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CurrencyTextField from '../atoms/CurrencyTextField';

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
});

const DebtForm = ({
  user,
  setUser,
  reason,
  setReason,
  amount,
  setAmount,
  allUsers,
  parent,
  fieldsWithError,
  setFieldsWithError,
}) => {
  const classes = useStyles();

  const handleChange = (setValue, value, name) => {
    setValue(value);

    if (!!fieldsWithError[name]) {
      const errors = fieldsWithError;
      delete errors[name];
      setFieldsWithError(errors);
    }
  };

  return (
    <form className={classes.root}>
      <Autocomplete
        options={allUsers}
        getOptionLabel={(user) => user.name}
        value={user}
        onChange={(event, value) => handleChange(setUser, value, 'user')}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Usuário"
            variant="outlined"
            error={!!fieldsWithError.user}
            helperText={fieldsWithError.user}
          />
        )}
      />

      <TextField
        label="Descrição"
        variant="outlined"
        value={reason}
        onChange={(e) => handleChange(setReason, e.target.value, 'reason')}
        error={!!fieldsWithError.reason}
        helperText={fieldsWithError.reason}
      />

      <CurrencyTextField
        label="Valor"
        id={parent}
        value={amount}
        onChange={(value) => handleChange(setAmount, value, 'amount')}
        error={!!fieldsWithError.amount}
        helperText={fieldsWithError.amount}
      />
    </form>
  );
};

export default DebtForm;
