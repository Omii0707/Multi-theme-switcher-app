import React from "react";

interface CardProps {
  title: string;
  image: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, image, price }) => {
  return (
    <div
      className="
      bg-white dark:bg-gray-800 
      shadow-xl rounded-2xl 
      p-4 flex flex-col items-center 
      w-56 sm:w-64 
      transition-transform transform 
      hover:scale-105 hover:shadow-2xl 
      border border-indigo-800 dark:border-gray-600
    "
    >
      <img
        src={image}
        alt={title}
        className="h-28 w-28 object-contain mb-3 rounded-lg"
      />
      <h2 className="text-md sm:text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <p className="text-pink-600 dark:text-yellow-400 mt-2 font-bold text-lg">
        ${price}
      </p>
      <button
        className="
        mt-4 px-5 py-2 
        bg-gradient-to-r from-blue-500 to-indigo-600 
        hover:from-blue-600 hover:to-indigo-700 
        text-white rounded-full 
        shadow-md hover:shadow-lg 
        transition-all duration-300
      "
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
