import "./App.css";
import Body from "./Body";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Team from "./Team";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
