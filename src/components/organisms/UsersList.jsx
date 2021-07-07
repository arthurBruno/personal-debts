import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DefaultList from '../molecules/DefaultList';
import LettersAvatar from '../atoms/LettersAvatar';
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight';

const UsersList = ({ users, handleUserClick }) => (
  <DefaultList title="Usuários" >
    {users.map((user) => (
      <ListItem button key={user.id} onClick={() => handleUserClick(user)}>
        <ListItemIcon>
          <LettersAvatar name={user.name} />
        </ListItemIcon>

        <ListItemText>
          <Typography variant="body1">{user.name}</Typography>
          <Typography variant="body2">{user.email}</Typography>
        </ListItemText>

        <ListItemIcon className="arrow-icon">
          <ArrowIcon color="primary" />
        </ListItemIcon>
      </ListItem>
    ))}
  </DefaultList>
);

export default UsersList;
