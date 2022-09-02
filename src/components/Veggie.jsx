import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, RecipeCard } from "./ResultCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      // console.log(data);
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
              pagination: false,
            },
            gap: "2rem",
            pagination: false,
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide>
                <Link to={"/recipe/" + recipe.id}>
                  <RecipeCard key={recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </RecipeCard>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;
