import "./App.css";
import Body from "./Body";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Team from "./Team";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import { useState } from "react";
function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <div className="text-2xl font-bold py-5 bg-orange-300 text-blue-600 text-center">
        Welcome Vicky..Keep Learning!
        <nav>
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="Hi">Hindi</option>
          <option value="Ru">Russian</option>
        </select>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/about" element={<About lang={lang}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
