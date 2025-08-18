import {Routes, Route } from "react-router-dom";
import {MovieList, MovieDetails, Search, PageNotFound} from "../pages";

  // const popular = "popular";
  // const nowPlaying = "now_playing";
  // const topRated = "top_rated";
  // const upcoming = "upcoming";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<MovieList api="movie/now_playing" title="Home" />}></Route>
            <Route path="movies/popular" element={<MovieList  api="movie/popular" title="Popular"/>}></Route>
            <Route path="movies/top" element={<MovieList api="movie/top_rated" title="Top"/>}></Route>
            <Route path="movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming"/>}></Route>
            <Route path="movie/:id" element={<MovieDetails  />}></Route>
            <Route path="search" element={<Search api="search/movie" title="Search"/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </>
  )
}
