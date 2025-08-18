import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import {Card} from "../components";

interface MovieListProps {
  api: string;
  title: string;
}

export const MovieList = ({api, title}: MovieListProps) => {

  const {data: movies} = useFetch(api);

  useEffect(() => {
      document.title = `Movies - ${title}`;
    });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies?.map((movie: any) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  );
};
