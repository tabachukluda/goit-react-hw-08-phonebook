import styled from '@emotion/styled'

export const Header=styled.section` 
background-color:  #f9f7f9;
width: 100%;
max-width: 1100px;
margin: 12px auto;
padding: 15px;
box-shadow: 0 0 0 1px rgb(228, 240, 242) inset,
0 5px 0 -4px rgb(187, 221, 237),
0 5px 0 -3px rgb(187, 214, 237),
0 11px 0 -8px rgb(187, 206, 237),
0 11px 0 -7px rgb(178, 193, 235),
0 17px 0 -12px rgb(155, 164, 224),
0 17px 0 -11px rgb(105, 101, 230);
`
export const Box = styled.div` display: flex;
justify-content: space-between;
max-width: 1100px;
margin: 0 auto;
border-bottom: 5px solid;
border-radius: 4px;
border-image: linear-gradient(to right, #abdbf7, #9cb2d6, #4d7af7, #4d5bf7) 47% 0%;
`