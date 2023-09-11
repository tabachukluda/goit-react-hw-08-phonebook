import styled from '@emotion/styled'


export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--bgColorform);
  box-shadow: var(--boxShadow);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
  padding: 10px;
  width: 100%;
  border: 2px solid rgba(199, 200, 201);
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(199, 200, 201) inset;
  background-color:  #d7d8d9;
  &::placeholder {
  color: #ffffff;
  font-style: italic;  
}
  &:focus {
  background-color: #f9f1f1;
  box-shadow: rgba(201, 208, 214) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: 2px solid rgba(199, 200, 201);
  }

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
