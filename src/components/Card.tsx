
import { Link } from "react-router-dom";
import Poster from "./Poster";

export const Card = (props: any) => {
  console.log(props);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3 md:w-full">
      <Link to={"/movie/"+props.movie.id}>
        <Poster path={props.movie.poster_path}/>
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.movie.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.movie.overview}
        </p>
        <Link
          to={"/movie/"+props.movie.id}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
