import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import {Card} from "../components";

interface MovieListProps {
  api: string;
  title: string;
}

export const MovieList = ({api, title}: MovieListProps) => {

  const {data: movies} = useFetch(api);

  const poster = "flex justify-start flex-wrap";
  const list = "flex justify-start flex-wrap flex-col";

  const [listType, setListType] = useState(false);

  const [movieListType, setMovieListType] = useState(poster)

  const toggleListType = () => {
    setListType((prevState) => !prevState);
    setMovieListType(!listType ? list : poster);    
  }

  useEffect(() => { document.title = `Movies - ${title}`; });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-end flex-wrap">
          <button 
            title="toggle list type"
            type="button" 
            onClick={toggleListType}
            className="text-white pb-2">
            {!listType ?
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
              </svg>
            :
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z" clip-rule="evenodd"/>
              </svg>
            }
          </button>
        </div>
        <div className={movieListType}>
          {movies?.map((movie: any) => (
            <Card key={movie.id} movie={movie} listType={listType}/>
          ))}
        </div>
      </section>
    </main>
  );
};
