import React, { useState } from 'react'

const Review = (review: any) => {
    const r = review.review;

    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 100;

    const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col justify-between py-1 px-4 leading-normal">
        <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{r.author}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {isExpanded ? r.content : `${r.content.slice(0, maxLength)}...`}
            <span onClick={toggleReadMore} className=" text-blue-700 cursor-pointer block" >
                {isExpanded ? "Read Less" : "Read More"}
            </span>
        </p>
    </div>
  )
}

export default Review