'use client'

import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';

const SneakerStore = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
    },
    {
      id: 4,
      name: "Runner Breeze",
      price: "R$ 249,90",
      description: "Tênis leve e respirável, ideal para corridas longas",
      image: "https://static.netshoes.com.br/produtos/tenis-masculino-esportivo-para-treino-academia-confortavel-lancamento-relogio/48/REN-0260-048/REN-0260-048_zoom1.jpg?ts=1660655379&ims=544x"
    },
    {
      id: 5,
      name: "Street Flex",
      price: "R$ 199,90",
      description: "Estilo urbano com toque moderno e sola antiderrapante",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Retro Vibes 90s",
      price: "R$ 329,90",
      description: "Tênis retrô inspirado nos anos 90, conforto e estilo nostálgico",
      image: "https://vinncistore.com.br/cdn/shop/products/tenis-esportivo-masculino-will-tenis-esportivo-masculino-will-vinnci-store-azul-37-636908.jpg?v=1695874406"
    },
    {
      id: 7,
      name: "Performance X",
      price: "R$ 549,90",
      description: "Modelo profissional com suporte avançado para treinos intensos",
      image: "https://akapanda.com.br/wp-content/uploads/2023/07/tenis-esportivo-masculino-caminhada-e-academia-tenis-tenis-de-corrida-tenis-masculino-tenis-corrida-tenis-academia-aka-panda-3.jpg"
    },
    {
      id: 8,
      name: "Casual Comfort",
      price: "R$ 159,90",
      description: "Tênis básico para o dia a dia, leve e versátil",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop"
    }
  ];

  // Filtrar os tênis baseado no termo de pesquisa
  const filteredSneakers = sneakers.filter(sneaker =>
    sneaker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Loja de Tênis Esportivos</h1>
          <ShoppingCart className="w-6 h-6" />
        </div>
      </nav>

      {/* barra de pesquisa */}
      <div className="bg-gray-50 p-4">
        <div className="container mx-auto">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar tênis..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* produtos */}
      <main className="container mx-auto p-8">
        {filteredSneakers.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">Nenhum tênis encontrado para "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredSneakers.map((sneaker) => (
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
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 mt-16">
        <p className="text-gray-600">© 2025 - Loja de Tênis Esportivos</p>
      </footer>
    </div>
  );
};

export default SneakerStore;