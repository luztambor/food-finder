import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import TopBar from "./components/TopBar";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Search />
        <Category />
        <Pages />
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
