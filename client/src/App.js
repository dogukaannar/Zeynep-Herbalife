import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const handleClick = () => setMessage("Butona tıkladınız! 🎉");

  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="logo">Zeynep Herbalife</h2>
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Ana Sayfa</a></li>
          <li><a href="#about" onClick={closeMenu}>Hakkımızda</a></li>
          <li><a href="#contact" onClick={closeMenu}>İletişim</a></li>
        </ul>
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <header className="hero" id="home">
        <div className="animated-bg"></div>

        {/* Sağ üstteki buton */}
        <div className="top-right-button">
          <Button text="Mesaj Göster" onClick={handleClick} />
        </div>

        <h1>Hoş Geldiniz!</h1>
        <p>Modern React web sitesi örneği.</p>

        {message && <p className="message">{message}</p>}

        <img src="/sample.jpg" alt="Örnek" className="hero-image" />
      </header>

      <section className="about" id="about">
        <div className="card">
          <h2>Hakkımızda</h2>
          <p>Zeynep Herbalife ürünleri ile sağlıklı yaşam ve spor hayatını destekliyoruz.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="card">
          <h2>İletişim</h2>
          <p>Email: info@zeynepherbalife.com</p>
          <p>Telefon: 0555 555 55 55</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Zeynep Herbalife. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
