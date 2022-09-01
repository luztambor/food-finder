import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Try Something New</h3>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              1024: { perPage: 3 },
              767: { perPage: 2 },
            },
            gap: "2rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <RecipeCard>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </RecipeCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const RecipeCard = styled.div`
  min-height: 20rem;
  max-width: 28rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
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
    font-size: 1.1rem;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Popular;
