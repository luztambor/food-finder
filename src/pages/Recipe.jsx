import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [activeTab, setActiveTab] = useState("ingredients");
  let params = useParams();

  const getRecipeInfo = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const info = await data.json();
    // console.log(`results: ${JSON.stringify(info.extendedIngredients)})}`);
    setRecipeInfo(info);
    console.log(recipeInfo.extendedIngredients);
  };

  useEffect(() => {
    getRecipeInfo(params.name);
  }, [params.name]);

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
        <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
      </div>
      <Info>
        <ButtonWrapper>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
        </ButtonWrapper>

        {activeTab === "ingredients" && (
          <ul>
            {/* {recipeInfo.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })} */}
          </ul>
        )}
        {activeTab === "instructions" && (
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></p>
          </div>
        )}
      </Info>
    </RecipeWrapper>
  );
}

const RecipeWrapper = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }

  .active {
    background: black;
    color: white;
  }

  img {
    width: 75%;
    margin-bottom: 1rem;

    @media (max-width: 980px) {
      width: 100%;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    width: 75%;
    margin-bottom: 2.5rem;

    @media (max-width: 980px) {
      font-size: 1.1rem;
      width: 100%;
    }
  }

  li {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: black;
  border: 1px black solid;
  margin: 0rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  height: 3.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Recipe;
