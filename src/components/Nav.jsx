import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Works from "./Works"
import Signin from "./Signin";
const Nav = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
    </div>
  );
};
export default Nav;