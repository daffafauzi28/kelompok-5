import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Container utama dengan background image */}
      <div
        className="min-h-screen bg-black text-white px-6 py-10 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/doll.jpg')",
        }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-style bg-opacity-60 z-0"></div>

        {/* Konten utama */}
        <div className="relative z-10 text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-sm">
            Selamat Datang di <span className="text-primary">LaptopSecond.id</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Temukan laptop terbaik untuk kerja, kuliah, atau gaming!
          </p>
        </div>

        {/* Tombol Navigasi */}
        <div className="relative z-10 mt-8 flex justify-center gap-4 flex-wrap">
          <Link to="/about" className="btn btn-outline btn-info">Tentang Kami</Link>
          <Link to="/product" className="btn btn-outline btn-success">Produk</Link>
          <Link to="/contact" className="btn btn-outline btn-warning">Hubungi Kami</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
