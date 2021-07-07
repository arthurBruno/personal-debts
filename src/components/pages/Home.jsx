import { useState, useEffect } from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import UsersList from '../organisms/UsersList';
import DebtsList from '../organisms/DebtsList';
import api from '../../functions/api';
import debtsUtils from '../../functions/utils/debts';

const useStyles = makeStyles({
  desktop: {
    '@media (max-width: 959px)': {
      display: 'none',
    }
  },
  mobile: {
    '& .react-swipeable-view-container': {
      height: '100vh',
    },

    '& .mobile-view': {
      height: '100%',
    },

    '@media (min-width: 959px)': {
      display: 'none',
    }
  },
  debtsList: {
    paddingLeft: '10px',
    
    '@media (max-width: 959px)': {
      paddingLeft: 0,
    },
  },
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

  return (
    <>
      <Grid container className={classes.desktop}>
        <Grid item md={4} xs={12}>
          <UsersList
            users={debtsUtils.filterIndebtedUsers(allUsers, allDebts)}
            handleUserClick={(user) => setSelectedUser(user)}
          />
        </Grid>
        <Grid item md={8} xs={12} className={classes.debtsList}>
          <DebtsList
            debts={debtsUtils.filterDebts(allDebts, selectedUser)}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            allUsers={allUsers}
            getUsersAndDebts={getUsersAndDebts}
            getDebts={getDebts}
          />
        </Grid>
      </Grid>

      <Box className={classes.mobile}>
        <SwipeableViews index={!!selectedUser ? 1 : 0} disabled>
          <Box className="mobile-view">
            <UsersList
              users={debtsUtils.filterIndebtedUsers(allUsers, allDebts)}
              handleUserClick={(user) => setSelectedUser(user)}
            />
          </Box>

          <Box className="mobile-view">
            <DebtsList
              debts={debtsUtils.filterDebts(allDebts, selectedUser)}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              allUsers={allUsers}
              getUsersAndDebts={getUsersAndDebts}
              getDebts={getDebts}
            />
          </Box>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default Home;
