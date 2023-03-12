import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Filter contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
