import { Item, ItemWrapper, Text, Button } from './ListItem.styled';

export const ListItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Item key={id}>
      <ItemWrapper>
        <Text>{name}:</Text>
        <Text>{number}</Text>

        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </ItemWrapper>
    </Item>
  );
};
