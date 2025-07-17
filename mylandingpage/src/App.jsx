import "./App.css";
import MovieCard from "./Components/MovieCard";
import {Routes, Route} from "react-router-dom" 
import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./Contexts/MovieContext"



function App() {
  const movieNumber = 2;

  return (

    <MovieProvider>
        <NavBar />
      <main className="main-content bg-black text-white font-bold font-mono ">
        <Routes>
            <Route path='/' element={<Home />} />
             <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
      </MovieProvider>
  
  );
}

export default App;
