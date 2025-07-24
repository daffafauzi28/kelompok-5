import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pesan:', form);
    alert('Pesan terkirim!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 bg-cover bg-center relative">
      <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nama" value={form.name}
          onChange={handleChange} className="input input-bordered w-full" required />
        <input type="email" name="email" placeholder="Email" value={form.email}
          onChange={handleChange} className="input input-bordered w-full" required />
        <textarea name="message" placeholder="Pesan" value={form.message}
          onChange={handleChange} className="textarea textarea-bordered w-full" required />
        <button type="submit" className="btn btn-primary">Kirim</button>
         <div
        className="min-h-screen bg-black text-white px-6 py-10 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/berbagai.jpg')",
        }}
      ></div>
      </form>
    </div>
  );
};

export default Contact;
