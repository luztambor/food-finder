import { IoMdNutrition } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
// import { SiLeaflet } from "react-icons/si";
import { RiCake3Line } from "react-icons/ri";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <StyledNavLink to={"cuisine/vegetarian"}>
        <IoMdNutrition />
        <h4>Vegetarian</h4>
      </StyledNavLink>
      <StyledNavLink to={"cuisine/vegan"}>
        <IoEarth />
        <h4>Vegan</h4>
      </StyledNavLink>
      <StyledNavLink to={"cuisine/dessert"}>
        <RiCake3Line />
        <h4>Dessert</h4>
      </StyledNavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1.5rem;
  text-decoration: none;
  border: 1px black solid;
  background: white;
  //   background: linear-gradient(35deg, #494949, #313131);
  min-width: 6rem;
  min-height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  @media only screen and (min-width: 600px) {
    height: 3rem;
    width: 3rem;
  }

  @media only screen and (min-width: 900px) {
    height: 4rem;
    width: 4rem;
  }

  @media only screen and (min-width: 1200px) {
    height: 6rem;
    width: 6rem;
  }

  h4 {
    color: black;
    font-size: 0.9rem;
  }

  svg {
    color: black;
    font-size: 1.5rem;
  }

  &.active {
    border: 1px #888 solid;

    h4 {
      color: #888;
    }

    svg {
      color: #888;
    }
  }
`;

export default Category;
