import styled from '@emotion/styled'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  padding: 10px;
  
  font-size: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(199, 200, 201) inset;
  background-color:  #d7d8d9;    
`;

export const Button = styled.button`
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid var(--primaryTextColor);
  background-color: var(--secondaryTextColor);

  &:hover,
  &:focus {
  background-color: rgb(114, 113, 114);
  }
    
`;