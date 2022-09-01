import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 2rem;
`;

export const RecipeCard = styled.div`
min-height: 15rem;
max-width: 28rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
background-size: contain;
background-color: black;

img {
  border-radius: 2rem;
  position: absolute;
  left 0;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.4) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.4) 100%);
}

p {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1.12rem;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
