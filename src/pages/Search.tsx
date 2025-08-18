import { useSearchFetch } from "../hooks/useSearchFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {Card} from "../components";

interface MovieListProps {
  api: string;
  title: string;
}

export const Search = ({api, title}: MovieListProps) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useSearchFetch(api, queryTerm);

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

