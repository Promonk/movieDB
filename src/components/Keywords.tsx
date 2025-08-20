import React, { useEffect, useState } from 'react';
import {getOptions} from "../hooks/getOptions";

const Keywords = (id: any) => {

    const [keywords, setKeywords] = useState([]);

    const handleKeywords = (k: any) => {
        console.log(k.keywords);
        setKeywords(k.keywords);
    }

    useEffect(() => {
            console.log(id);
            const i = id.id;
            const fetchReviews = async () => {
                if(i){
                    fetch(`https://api.themoviedb.org/3/movie/${i}/keywords`, getOptions)
                    .then(res => res.json())
                    .then(res => handleKeywords(res))
                    .catch(err => console.error(err));
                }
            }
            fetchReviews();
        }, [id])

  return (
    <div className="flex flex-row flex-wrap py-1 px-4">
        {keywords?.slice(0, 20).map((k: any) => (
            <div className="py-1 px-2.5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                {k.name}
            </div>
        ))}
    </div>
  )
}

export default Keywords