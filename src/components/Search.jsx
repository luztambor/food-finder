import styled from "styled-components";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <StyledForm>
      <BsSearch />
      <input type="text" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 1rem 0 0 0;
  margin: auto;
  position: relative;
  width: 80%;

  input {
    border: 1px black solid;
    background: white;
    font-size: 1.5rem;
    black: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    color: black;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%);
  }
`;

export default Search;
