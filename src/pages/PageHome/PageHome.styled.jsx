import styled from '@emotion/styled'

export const PageHomeSection = styled.section`
  display: block;
  width: 100%;
  max-width: 800px;
  height: 300px;
  margin: 0 auto 1em;
  margin-top: 20px;
  padding: 50px;
  background-color:  #f9f7f9;
  border-radius: 10px;
    
  box-shadow:
    inset rgba(0,0,0,.6) 0 -3px 8px,
    inset rgba(252,255,255,.7) 0 3px 8px,
    rgba(0,0,0,.8) 0 3px 8px -3px;
`;

export const PageHomeTitle = styled.h1`
text-align: center;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
color: var(--primaryTextColor);
transition: all 0.5s ease;

`;
export const PageHomeTitle2 = styled.h1`
text-align: center;
text-transform: uppercase;
font-weight: 700;
background: linear-gradient(to right, #3ab2b4, #3a89b4, #3a6fb4, #3a50b4) 47%
    0%;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const PageHomeText= styled.p`
text-align: center;
`;