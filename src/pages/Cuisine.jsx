import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RecipeCard, GridWrapper } from "../components/ResultCard";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    // console.log(`starting useEffect with ${params.type}`);
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=${name}`
    );
    const recipes = await data.json();
    // console.log(`results: ${JSON.stringify(recipes.recipes)}`);
    setCuisine(recipes.recipes);
  };

  return (
    <GridWrapper>
      {cuisine.map((item) => {
        return (
          <Link to={"/search/" + item.id}>
            <RecipeCard key={item.id}>
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} />
            </RecipeCard>
          </Link>
        );
      })}
    </GridWrapper>
  );
}

export default Cuisine;
