import { useEffect, useState } from "react";

import {getOptions} from "../hooks/getOptions";

export const useSearchFetch = (api: string, queryTerm: string | null) => {
  const [data, setData ] = useState([]);

  useEffect(()=> {
    const fetchMovies = async () => {
        fetch(`https://api.themoviedb.org/3/${api}?query=${queryTerm}&include_adult=false&language=en-US&page=1`, getOptions)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err));
    }
    fetchMovies();
  },[queryTerm, api])

  return ({data});
}

