import { IoMdNutrition } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { SiLeaflet } from "react-icons/si";
import { RiCake3Line } from "react-icons/ri";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <div>
        <IoMdNutrition />
        <h4>Vegetarian</h4>
      </div>
      <div>
        <IoEarth />
        <h4>Vegan</h4>
      </div>
      <div>
        <RiCake3Line />
        <h4>Desserts</h4>
      </div>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
