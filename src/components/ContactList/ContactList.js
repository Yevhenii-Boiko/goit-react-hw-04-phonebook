import { ListItem } from './ListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};
