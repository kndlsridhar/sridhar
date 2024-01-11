import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
const Nav = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default Nav;