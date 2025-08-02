import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 sm:mt-0">
      {products.map((p) => (
        <div
          key={p.id}
          className="shadow rounded p-4 bg-white dark:bg-gray-700 border border-gray-400"
        >
          <img src={p.image} alt={p.title} className="h-32 mx-auto" />
          <h2 className="text-lg font-semibold">{p.title}</h2>
          <p className="text-sm">${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
