import styled from "styled-components";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <StyledForm>
      <div>
        <BsSearch />
        <input type="text" />
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0rem 20rem;
  position: relative;

  div {
    width: 100%;
    position: relative;
  }

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
    transform: translate(100%, -50%);
  }
`;

export default Search;
