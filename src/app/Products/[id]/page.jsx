"use client"; // Client Component

import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailPage() {
  const params = useParams(); // Dynamic route param (_id)
  const router = useRouter();
  const { id } = params;

  const { data: product, error } = useSWR(
    id ? `http://localhost:5000/api/products/${id}` : null,
    fetcher
  );

  if (error) return <p className="text-center text-red-500">Failed to load product.</p>;
  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button 
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => router.back()}
      >
        &larr; Back
      </button>

      <div className="border rounded-lg p-4 shadow-lg">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
