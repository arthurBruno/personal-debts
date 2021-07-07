import { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import UsersList from '../organisms/UsersList';
import DebtsList from '../organisms/DebtsList';
import api from '../../functions/api';
import debtsUtils from '../../functions/utils/debts';

const useStyles = makeStyles({
  debtsList: {
    paddingLeft: '10px',
    
    '@media (max-width: 959px)': {
      paddingLeft: 0,
    }
  }
});

const Home = () => {
  const classes = useStyles();
  const [allUsers, setAllUsers] = useState([]);
  const [allDebts, setAllDebts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsersAndDebts = async () => {
    const data = await api.getUsersAndDebts();

    if (data && !data.error) {
      setAllUsers(data.allUsers);
      setAllDebts(data.allDebts);
    }
  };

  const getDebts = async () => {
    const data = await api.getAllDebts();

    if (data && !data.error) {
      setAllDebts(data);
    }
  };

  useEffect(() => {
    getUsersAndDebts();
  }, []);

  const handleUserClick = (user) => setSelectedUser(user);

  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <UsersList
          users={debtsUtils.filterIndebtedUsers(allUsers, allDebts)}
          handleUserClick={handleUserClick}
        />
      </Grid>
      <Grid item md={8} xs={12} className={classes.debtsList}>
        <DebtsList
          debts={debtsUtils.filterDebts(allDebts, selectedUser)}
          selectedUser={selectedUser}
          allUsers={allUsers}
          getUsersAndDebts={getUsersAndDebts}
          getDebts={getDebts}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
