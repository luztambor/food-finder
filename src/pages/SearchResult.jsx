import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeCard, GridWrapper } from "../components/ResultCard";
import { Link } from "react-router-dom";

function SearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  let params = useParams();

  const getSearchResult = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=6&query=${name}`
    );
    const recipes = await data.json();
    // console.log(`results: ${JSON.stringify(recipes)}`);
    setSearchResult(recipes.results);
  };

  useEffect(() => {
    // console.log(params.term);
    getSearchResult(params.term);
  }, [params.term]);

  return (
    <GridWrapper>
      {searchResult.map((item) => {
        return (
          <Link to={"/recipe/" + item.id}>
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

export default SearchResult;
