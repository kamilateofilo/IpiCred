import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Link as RouterLink } from 'react-router-dom';


export const Header = styled.header`
  background-color: #f8f9fa;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 10px;
  z-index: 1000;

  @media (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
    padding: 10px;
  }
`;

export const NavbarBrand = styled.a`
  font-weight: bold;
`;

export const Logo = styled.img`
  letter-spacing: 5px;
`;

export const Manifesto = styled.a`
  color: #3F2409;
  text-decoration: none;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const NavLink = styled.a`
  color: #3F2409;
  text-decoration: none;
  margin-right: 20px;
  font-size: 15px;
  font-weight: 500;


  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: #AC883F;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

   &:hover {
    color: #000;
  }
`;

export const Separator = styled.span`
  margin: 0 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Btn = styled.button`
  margin-left: 15px;
  background-color: #AC883F;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap; // Prevent breaking into a new line

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-top: 5px;
    padding: 5px 8px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
