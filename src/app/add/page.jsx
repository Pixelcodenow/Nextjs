"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    let imageUrl = "";

    // Upload image to Imgbb
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const imgbbRes = await fetch(
          `https://api.imgbb.com/1/upload?key=d44897f2b2d7a9f2a8c6655cb2fd26b4`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await imgbbRes.json();
        if (data.success) {
          imageUrl = data.data.url;
        } else {
          setMessage("Image upload failed.");
          setLoading(false);
          return;
        }
      } catch (err) {
        setMessage("Image upload error: " + err.message);
        setLoading(false);
        return;
      }
    }

    // Add product to backend
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description, image: imageUrl }),
      });

      if (res.ok) {
        setMessage("Product added successfully!");
        setName("");
        setPrice("");
        setDescription("");
        setImage(null);
      } else {
        setMessage("Failed to add product.");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
      {message && <p className="text-center mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
