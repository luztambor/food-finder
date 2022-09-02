import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, RecipeCard } from "./ResultCard.jsx";
import { useEffect, useState } from "react";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              1200: { perPage: 3 },
              900: { perPage: 2 },
              600: { perPage: 1 },
            },
            gap: "2rem",
            pagination: false,
          }}
        >
          {veggie.map((recipe) => {
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

export default Veggie;
