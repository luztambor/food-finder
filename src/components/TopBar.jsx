import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";

function TopBar() {
  return (
    <Nav>
      <Logo to={"/"}>
        <GiForkKnifeSpoon />
        hungr
      </Logo>
    </Nav>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: black;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }
`;

export default TopBar;
