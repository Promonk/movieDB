
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Poster from "../components/Poster";
import { Cast } from "../components/Cast";
import { Similar } from "../components/Similar";
import {getOptions} from "../hooks/getOptions";

export const MovieDetails = () => {

  const [movie, setMovie] = useState([]) as any;
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  const handleMovie = (result: any) => {
    setMovie(result);
    setRating(result.vote_average * 10);
    document.title = `${result.title} - Details`;
  }

  useEffect(() => {
    async function fetchMovie() {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, getOptions)
        .then(res => res.json())
        .then(res => handleMovie(res))
        .catch(err => console.error(err));
      }
    fetchMovie();
  },[id])

  return (
    <>
    <main>
      <section className="max-w-7xl mx-auto py-7" >
        <div className="w-full bg-no-repeat bg-left" style={{backgroundImage: "url(https://image.tmdb.org/t/p/w1920/" + movie.backdrop_path + ")"}}>
          <div className="w-full flex flex-col md:flex-row p-2 bg-gradient-to-r from-white/100 to-white/90 dark:from-black/100 dark:to-black/60">
            <div className="w-full md:w-[300px] mr-4 flex-none ">
              <Poster path={movie.poster_path}/>
            </div>
            <div className="w-full block">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{movie.title}</h5>
              <p className="italic text-gray-900 dark:text-white mb-1">{movie.tagline}</p>

              {/* rating */}
              <div className="flex items-center flex-row w-full">
                <div className="w-32 mr-2">
                    <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700 me-2">
                      <div className="bg-blue-600 h-2.5 rounded-sm dark:bg-blue-500" style={{width:`${rating}%`}}></div>
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">{movie.vote_average} / {movie.vote_count} votes</span>
              </div>

              {/* genres */}
              <ul className="flex flex-wrap text-gray-900 dark:text-white my-2">
                { movie.genres ? (
                  movie.genres.map((g: any, index: any) => (
                    <li key={index} className="list-none text-gray-500 dark:text-gray-400 py-1 px-1.5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      {g.name}</li>
                  ))) : "" }
              </ul>

              {/* details */}
              <ul className="flex flex-wrap text-gray-900 dark:text-white my-2">
                <li className="list-none text-gray-500 dark:text-gray-400 py-1 px-1.5 me-2 mb-2 text-sm font-medium">
                  Runtime: {movie.runtime} min.
                </li>
                <li className="list-none text-gray-500 dark:text-gray-400 py-1 px-1.5 me-2 mb-2 text-sm font-medium">
                  Release date: {movie.release_date}
                </li>
                <li className="list-none text-gray-500 dark:text-gray-400 py-1 px-1.5 me-2 mb-2 text-sm font-medium">
                  Revenue: {
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(movie.revenue)}
                </li>
                <li className="list-none text-gray-500 dark:text-gray-400 py-1 px-1.5 me-2 mb-2 text-sm font-medium">
                  Budget: {
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(movie.budget)}
                </li>
              </ul>
              
              {/* overview */}
              <p className="mb-5 mt-3 text-base text-gray-500 sm:text-lg dark:text-gray-400">{movie.overview}</p>
              
              {/* homepage */}
              {movie.homepage &&
                <a href={movie.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Homepage
                </a>
              }
              
            </div>
          </div>
        </div>
      </section>
      {/* actors */}
      <section className="max-w-7xl mx-auto pb-7">
        <div className="sm:p-2 border-t-[1px] border-slate-300 dark:border-slate-800">
          <h5 className="mb-1 px-2 text-2xl font-bold text-gray-900 dark:text-white">Top Cast</h5>
          <Cast id={movie.id}/>
        </div>
      </section>
      {/* related */}
      <section className="max-w-7xl mx-auto pb-7">
        <div className="sm:p-2 border-t-[1px] border-slate-300 dark:border-slate-800">
          <h5 className="mb-1 px-2 text-2xl font-bold text-gray-900 dark:text-white">You might also like</h5>
          <Similar id={movie.id}/>
        </div>
      </section>
      </main>
    </>
  )
}
