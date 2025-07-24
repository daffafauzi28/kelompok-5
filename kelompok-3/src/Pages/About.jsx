import React from 'react'

function About() {
  return (
    
    <div className="min-h-screen bg-black text-white px-6 py-10 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/predator.jpg')",
        }}>
      <h1 className="text-3xl font-bold mb-6 text-center">Tentang Toko Kami</h1>
      <p className="mb-4 text-white-700">
        Kami adalah website jual beli laptop baru dan bekas terpercaya di Indonesia. Dengan pengalaman toko offline dan online, kami hadir untuk memberikan solusi terbaik dalam memenuhi kebutuhan laptop Anda.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Visi & Misi</h2>
      <ul className="list-disc list-inside text-white-700 mb-4">
        <li>Memberikan produk berkualitas dengan harga terbaik.</li>
        <li>Memberikan pelayanan cepat, aman, dan terpercaya.</li>
        <li>Mendukung kemajuan teknologi dengan akses laptop yang terjangkau.</li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-2">Kenapa Harus Memilih Kami?</h2>
      <ul className="list-disc list-inside text-white-700 mb-4">
        <li>Barang bergaransi dan teruji kualitasnya</li>
        <li>Harga bersaing & transparan</li>
        <li>Pengiriman cepat dan aman</li>
        <li>Dukungan pelanggan yang responsif</li>
      </ul>
      <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-error"
          >
            Kembali
          </button>
      </div>

  )
}

export default About
