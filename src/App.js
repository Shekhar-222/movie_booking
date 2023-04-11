import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Nopage } from "./pages/Nopage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import MovieGrid from "./pages/MovieGrid";
import MovieDetails from "./pages/MovieDetails";
import TicketPlan from "./pages/TicketPlan";
import SeatPlan from "./pages/SeatPlan";
import CheckOut from "./pages/CheckOut";
import MovieFood from "./pages/MovieFood";
import MovieList from "./pages/MovieList";
import MovieDetail_2 from "./pages/MovieDetailTwo";
import About from "./pages/About";
import Download from "./pages/Download";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movie-grid" element={<MovieGrid />}></Route>
            <Route path="/movie-details" element={<MovieDetails />}></Route>
            <Route path="/movie-ticket-plan" element={<TicketPlan />}></Route>
            <Route path="/movie-seat-plan" element={<SeatPlan />}></Route>
            <Route path="/movie-checkout" element={<CheckOut />}></Route>
            <Route path="/popcorn" element={<MovieFood />}></Route>
            <Route path="/movie-list" element={<MovieList />}></Route>
            <Route path="/movie-details-2" element={<MovieDetail_2 />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/apps-download" element={<Download />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
          <Route path="/sign-in" element={<Signin/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
          <Route path="*" element={<Nopage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
