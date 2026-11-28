// import Counter from "./Hooks/UseState/Counter";
// import Players from "./Players";
// import Score from "./Hooks/UseState/Score";
// import User from "./Hooks/UseEffects/User";
// import Flipkart from "./components/Flipkart";
// import FetchAPI from "./components/FetchAPI"
// import Registration from "./components/Registration";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const App = () => {
//   let players = [
//     { id: 1, name: "Virat Kohli" },
//     { id: 2, name: "MS Dhoni"},
//     { id: 3, name: "Rohit Sharma" },
//     { id: 4, name: "Jasprit Bumrah"}
//   ];

  // const mobile = "iphone 14 pro max";
  return (
    <div style={{ backgroundColor: "#000000", padding: "20px", textAlign: "center", fontFamily: "fantasy"  }}>
      <h1>Welcome to App</h1>
{/* 
      <hr style={{ margin: "20px 0" }} />

      <h2>Indian Cricket Players</h2>
       <Players obj1={players} /> 
      <Counter />
            
      <h1>Display Score</h1>
      <Score />
      <h1>Welcome to Components page</h1>
      <Flipkart mobile = {mobile} /> 
      <User/>
      <FetchAPI/> 
      <Registration/>*/}

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;