import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RecipeCard } from "../components/ResultCard";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    console.log(`starting useEffect with ${params.type}`);
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=${name}`
    );
    const recipes = await data.json();
    // console.log(`results: ${JSON.stringify(recipes)}`);
    setCuisine(data.recipes);
    console.log(`here's cuisine: ${cuisine}`);
  };

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <RecipeCard key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
          </RecipeCard>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  align-content: center;
  justify-content: center;
`;

export default Cuisine;
