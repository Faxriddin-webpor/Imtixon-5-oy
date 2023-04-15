import React, { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import Kontact from "./components/Kontact/Kontact";
import Korzinka from "./components/Korzinka/Korzinka";
import Liked from "./components/Liked/Liked";
import Servise from "./components/Servise/Servise";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./components/SinglePage/SinglePage";
import Dostavka from "./components/Dostavka/Dostavka";
import Zakaz from "./components/Zakaz/Zakaz";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <div className="container bg-[#EAEAEA]">
        <Header count={count} count2={count2} />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home setCount={setCount} setCount2={setCount2} />}
            />
            <Route path="/kontact" element={<Kontact />} />
            <Route path="/korzinka" element={<Korzinka />} />
            <Route path="/servise" element={<Servise />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/singlepage" element={<SinglePage />} />
            <Route path="/dostavka" element={<Dostavka />} />
            <Route path="/zakaz" element={<Zakaz />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
