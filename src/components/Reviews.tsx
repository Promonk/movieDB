import React, { useEffect, useState } from 'react'
import {getOptions} from "../hooks/getOptions";
import Review from './Review';


const Reviews = (id: any) => {

    const [reviews, setReviews] = useState([]);

    const handleReviews = (res: any) => {
        setReviews(res.results);
    }

    useEffect(() => {
        console.log(id);
        const i = id.id;
        const fetchReviews = async () => {
            if(i){
                fetch(`https://api.themoviedb.org/3/movie/${i}/reviews?language=en-US&page=1`, getOptions)
                .then(res => res.json())
                .then(res => handleReviews(res))
                .catch(err => console.error(err));
            }
        }
        fetchReviews();
    }, [id])

  return (
    <div>
        {reviews?.slice(0, 2).map((review: any) => (
            <Review review={review} />
        ))}
    </div>
  )
}

export default Reviews