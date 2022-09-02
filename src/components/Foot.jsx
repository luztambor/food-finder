import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

function Foot() {
  return (
    <BottomBar>
      <div>
        <h4>
          <a
            href="https://www.github.com/luztambor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
            luztambor
          </a>
        </h4>
      </div>
    </BottomBar>
  );
}

const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  padding-top: 6rem;
  padding-bottom: 2rem;

  a {
    text-decoration: none;
    color: grey;
  }

  h4 {
    color: grey;
    font-size: 1rem;
    font-weight: 500;
  }

  div {
    margin: 0 3rem;
  }

  svg {
    position: absolute;
    transform: translate(-110%, 5%);
    font-size: 1rem;
  }
`;

export default Foot;
