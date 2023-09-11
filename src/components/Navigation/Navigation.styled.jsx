import styled from '@emotion/styled'

import { NavLink } from "react-router-dom"; 

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  color: var(--primaryTextColor);
  transition: all 0.5s ease;
  
  &:not(:last-child){
    margin-right: 12px;
  }
  &.active {
    color: var(--secondaryTextColor);
  }
`;