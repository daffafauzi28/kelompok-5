import React from 'react';


const produkList = [
  {
    nama: "Asus ROG Zephyrus G14",
    harga: "Rp 8.000.000",
    deskripsi: "Laptop gaming 14 inci dengan performa tinggi dan desain ringkas.",
    gambar: "/images/asus.jpg", 
  },
  {
    nama: "Acer Nitro 5",
    harga: "Rp 5.700.000",
    deskripsi: "Laptop gaming terjangkau dengan prosesor kuat dan pendingin efisien.",
    gambar: "/images/Acer.jpg", 
  },
  {
    nama: "HP Pavilion Plus 14",
    harga: "Rp 5.000.000",
    deskripsi: "Laptop tipis untuk produktivitas dengan layar jernih dan desain modern.",
    gambar: "/images/HP.jpg", 
  },
  {
    nama: "Lenovo IdeaPad Slim 3",
    harga: "Rp 3.500.000",
    deskripsi: "Laptop ringan dan ekonomis untuk kebutuhan harian.",
    gambar: "/images/Lenovo.jpg"
  }
];

const Produk = () => {
  return (
    <div style={styles.container}>
      {produkList.map((item, index) => (
        <div key={index} style={styles.card}>
          <img src={item.gambar} alt={item.nama} style={styles.image} />
          <h3>{item.nama}</h3>
          <p><strong>{item.harga}</strong></p>
          <p style={styles.deskripsi}>{item.deskripsi}</p>
          <button style={styles.button}>Beli</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  },
  card: {
    width: "220px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px"
  },
  deskripsi: {
    fontSize: "0.9em",
    color: "#555"
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
  

export default Produk;