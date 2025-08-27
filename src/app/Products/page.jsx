"use client"; // 💡 Client Component

import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function ProductsPage() {
  const { data: products, error } = useSWR("http://localhost:5000/api/products", fetcher);

  if (error) return <p className="text-center text-red-500">Error loading products</p>;
  if (!products) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border rounded-lg p-4 shadow-lg flex flex-col">
            {/* Image */}
            {p.image && (
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
            )}
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600 my-2">${p.price}</p>
            <p className="text-gray-500 mb-4 line-clamp-2">{p.description}</p>
            <Link 
             href={`/products/${p._id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
