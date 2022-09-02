import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
