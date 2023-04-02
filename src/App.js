import { Route, Routes } from "react-router-dom";
import Moviespopular from "./pages/Home/Moviespopular";

import { Layout } from "./components/Layout";
import MoviesTopRates from "./pages/Movies/MoviesTopRates";
import MoviesUpComing from "./pages/Movies/MoviesUpcoming";
import MoviesNowPlaying from "./pages/Movies/MoviesNowPlaying";
import MoviesLatest from "./pages/Movies/MoviesLatest";
import MovieDetails from "./pages/Movies/MovieDetails";
import MoviesSearch from "./pages/Movies/MoviesSearch";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";


import Profile from "./pages/Profile/Profile";

function App() {
  // const dispatch = useDispatch();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout /> }>
          <Route index element={<Moviespopular />} />
          <Route path="/topratedmovies" element={<MoviesTopRates />} />
          <Route path="/nowplayingmovies" element={<MoviesNowPlaying />} />
          <Route path="/upcomingmovies" element={<MoviesUpComing />} />
          <Route path="/latestmovies" element={<MoviesLatest />} />
          <Route path="/:id" element={<MovieDetails />} />
          <Route path="/moviesearch" element={<MoviesSearch />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
