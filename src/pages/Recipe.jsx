import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipeInfo, setRecipeInfo] = useState([]);
  let params = useParams();

  const getRecipeInfo = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const info = await data.json();
    console.log(`results: ${JSON.stringify(info)})}`);
  };

  useEffect(() => {
    getRecipeInfo(params.name);
  }, [params.name]);

  return <div></div>;
}

export default Recipe;
