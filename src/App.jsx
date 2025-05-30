import { useState } from "react";
import FoodList from "./components/Foodlist";
import Search from "./components/search";
import Nav from "./components/nav";
import "./App.css";
import Container from "./components/container";
import InnerContainer from "./components/innercontainer";
import Fooddetails from "./components/fooddetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId]=useState("658615")
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <Fooddetails foodId={foodId} setFoodId={setFoodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
