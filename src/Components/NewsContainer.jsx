import React from "react";
import { FaStar, FaRegEye, FaShareAlt,FaRegBookmark } from "react-icons/fa";
import { NavLink,  } from "react-router";


const NewsContainer = ({ news }) => {
  const {
    author,
    title,
    details,
    rating,
    total_view,
    thumbnail_url,
    tags,
  } = news;

  



  
  
  // Format publish date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
         <div >
                  <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 ">
      {/* Author & Share */}
      <div className="flex justify-between items-center px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className=" font-bold">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="icons flex gap-2">
        <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-primary transition" />
            <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary transition" />
        </div>

      </div>

      {/* News Image */}
      <figure className="px-4 pt-3 flex flex-col text-left">
        <h2 className="card-title text-lg py-2 font-semibold hover:underline transition">
          {title}
        </h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-56 object-cover"
        />
      </figure>

      {/* News Content */}
      <div className="card-body py-3 px-4">
        

        <p className="text-sm text-gray-600">
          {details.length > 200
            ? `${details.slice(0, 200)}...`
            : details}
          <NavLink to={`/details/${news.id}`} state={{news}}><span  className="text-blue-500 cursor-pointer ml-1">Read More</span></NavLink>
        </p>

        <p className="text-xs text-gray-500 mt-2">
          <span className="font-semibold">Tags:</span> {tags.join(", ")}
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center border-t px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < rating.number ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-700 ml-1">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
         </div>
  );
};

export default NewsContainer;
