import {
  FormControl,
  InputLabel,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';
import CurrencyInput from 'react-currency-input';

const CurrencyTextField = ({
  label,
  value,
  onChange,
  prefix,
  decimalSeparator,
  thousandSeparator,
  error,
  helperText,
  ...rest
}) => {
  const errorObj = error ? { boxShadow: 'inset 0 0 0 1px #d62046 !important' } : {};

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      position: 'relative',
  
      '& input:focus': {
        border: '1px solid white',
        boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`,
        outline: 0
      },
    },
    label: {
      position: 'absolute',
      top: '-30px',
      left: '10px',
      padding: '0 5px',
      backgroundColor: 'white',
      fontSize: '12px',
      color: error ? theme.palette.error.main : 'rgba(0, 0, 0, 0.54)',
    },
    input: {
      padding: '14.5px 14px',
      borderRadius: '4px',
      boxShadow: 'inset 0 0 0 0',
      border: '1px solid rgb(133, 133, 133, 0.5)',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.primary,
      ...errorObj
    },
    helperText: {
      margin: '3px 14px 0',
      color: error ? theme.palette.error.main : 'rgba(0, 0, 0, 0.54)',
    }
  }));

  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <CurrencyInput
        className={classes.input}
        decimalSeparator={decimalSeparator || ','}
        thousandSeparator={thousandSeparator || '.'}
        prefix={prefix || 'R$ '}
        value={value}
        onChangeEvent={(event, maskedValue, floatValue) => onChange(floatValue)}
        {...rest}
      />
      {helperText && <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CurrencyTextField;
