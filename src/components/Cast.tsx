import React from 'react'
import { useEffect, useState } from 'react';
import {getOptions} from "../hooks/getOptions";

import { Person } from "./Person";

export const Cast = (id: any) => {

  const [cast, setCast] = useState([]);

  const handleCast = (res: any) => {
    setCast(res.cast);
  }

  useEffect(() => {
    console.log("id", id);
        const fetchMovies = async () => {
          if(getOptions){
            fetch(`https://api.themoviedb.org/3/movie/${id.id}/credits?language=en-US&page=1`, getOptions)
            .then(res => res.json())
            .then(res => handleCast(res))
            .catch(err => console.error(err));
          }
        }
        fetchMovies();
    }, [id]);

  return (
    <section className="w-full mx-auto">
        <div className="w-full inline-flex overflow-hidden">
            <ul className="flex flex-wrap md:flex-nowrap ">
                {cast?.slice(0, 8).map((c: any) => (
                    <li key={c.id} className="w-[150px] mx-1">
                      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
                        <Person id={c.id}/>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

