import { useEffect, useState } from "react";

import {getOptions} from "../hooks/getOptions";

export const useFetch = (api: string) => {
  const [data, setData ] = useState([]);

  useEffect(()=> {
    const fetchMovies = async () => {
        fetch(`https://api.themoviedb.org/3/${api}?language=en-US&page=1`, getOptions)
          .then(res => res.json())
          .then(res => setData(res.results))
          .catch(err => console.error(err));
    }
    fetchMovies();
  },[api])

  return ({data});
}

