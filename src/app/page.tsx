'use client'

import React from 'react';
import { ShoppingCart } from 'lucide-react';

const SneakerStore = () => {
  const sneakers = [
    {
      id: 1,
      name: "Air Revolution Pro",
      price: "R$ 299,90",
      description: "Tênis esportivo de alta performance com tecnologia de amortecimento avançada",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Urban Style Classic",
      price: "R$ 189,90",
      description: "Design urbano moderno, perfeito para o dia a dia com máximo conforto",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Sport Max Elite",
      price: "R$ 459,90",
      description: "Tênis premium para atletas profissionais com sola de carbono",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Loja de Tênis Esportivos</h1>
          <ShoppingCart className="w-6 h-6" />
        </div>
      </nav>

      {/* Products */}
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sneakers.map((sneaker) => (
            <div
              key={sneaker.id}
              className="border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl will-change-transform"
            >
              <img
                src={sneaker.image}
                alt={sneaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{sneaker.name}</h3>
                <p className="text-gray-600 mb-4">{sneaker.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{sneaker.price}</span>
                  <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 mt-16">
        <p className="text-gray-600">© 2025 - Loja de Tênis Esportivos</p>
      </footer>
    </div>
  );
};

export default SneakerStore;
