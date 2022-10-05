import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./app/pages/Login";
import Signup from "./app/pages/Signup";
import Home from "./app/pages/Home";
import Header from "./app/components/Header";
import LandingPage from "./app/pages/LandingPage";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {isLoggedIn && <Route path="/home" element={<Home />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
