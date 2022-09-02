import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, RecipeCard } from "./ResultCard.jsx";
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
            perPage: 5,
            breakpoints: {
              1800: { perPage: 4 },
              1200: { perPage: 3 },
              900: { perPage: 2 },
              600: { perPage: 1 },
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

export default Popular;
