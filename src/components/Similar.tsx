import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import Poster from "./Poster";
import {getOptions} from "../hooks/getOptions";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import "../assets/css/swiper-bundle.min.css";


export const Similar = (id: any) => {
    const [movies, setMovies] = useState([]);

    const handleMovies = (res: any) => {
        setMovies(res.results);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            if(getOptions){
                fetch(`https://api.themoviedb.org/3/movie/${id.id}/similar?language=en-US&page=1`, getOptions)
                .then(res => res.json())
                .then(res => handleMovies(res))
                .catch(err => console.error(err));
            } 
        }
        fetchMovies();
    }, [id])

  return (
    <>
        <section className="w-full mx-auto">
            <div className="w-full inline-flex overflow-hidden">
                <Swiper 
                    modules={[Navigation, Pagination]}
                    navigation
                    slidesPerView={5}
                    slidesPerGroup={5} 
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1  }, // For small screens
                        768: { slidesPerView: 2, spaceBetween: 15, slidesPerGroup: 2  }, // For medium screens
                        1024: { slidesPerView: 5, spaceBetween: 20, slidesPerGroup: 5  }, // For large screens
                    }}
                    loop={true}
                    pagination={{
                        "clickable": true
                    }} 
                    className="mySwiper !pb-[25px]">
                        {movies?.slice(0,).map((movie: any) => (
                            <SwiperSlide>
                                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
                                <Link to={"/movie/"+movie.id}>
                                    <Poster path={movie.poster_path}/>
                                </Link>
                            </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </section>
    </>
  )
}
