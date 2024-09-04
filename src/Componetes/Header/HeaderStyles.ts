import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  .btn-light {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    margin-right: 10px;

    &.active {
      border: 1px solid #000;
      color: #000;
      background-color: #fff;
    }

    &:hover {
      text-decoration: none;
      color: #5F4B23;
    }
  }

  .dropdown-toggle {
    font-size: 15px;
    font-weight: 600;
    color: #5F4B23;
    background-color: #F4EEE2; 
    border-radius: 10px;
    padding: 5px 7px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      color: #5F4B23;
    }
  }

  .dropdown-menu {
    background-color: #FFF;
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: none;

    .dropdown-item {
      color: #5F4B23;

      &:hover {
        text-decoration: none;
        background-color: #fff;
      }
    }
  }
`;
