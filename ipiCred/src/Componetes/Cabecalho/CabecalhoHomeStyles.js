import styled from 'styled-components';

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
  padding-left: 10px;
  z-index: 1000;
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
`;

export const NavLink = styled.a`
  color: #3F2409;
  text-decoration: none;
  margin-right: 5px;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    color: #000;
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: #AC883F;
  font-weight: bold;
`;

export const Separator = styled.span`
  margin: 0 5px;
`;

export const Btn = styled.button`
  margin-left: 15px;
  background-color: #AC883F;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
