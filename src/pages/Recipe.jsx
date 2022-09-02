import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const getRecipeInfo = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const info = await data.json();
    // console.log(`results: ${JSON.stringify(info)})}`);
    setRecipeInfo(info);
  };

  useEffect(() => {
    getRecipeInfo(params.name);
  }, [params.name]);

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients{" "}
        </Button>
      </Info>
    </RecipeWrapper>
  );
}

const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: black;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: black;
  border: 1px black solid;
  margin: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
