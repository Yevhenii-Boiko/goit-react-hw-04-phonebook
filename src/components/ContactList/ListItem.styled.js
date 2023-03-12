import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #188ce8;
  }
`;
