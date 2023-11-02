import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-end gap-5 h-[80px] bg-testing ">
      <NavLink to="/" className="text-xl text-orange-400">
        Home
      </NavLink>
      <NavLink to="resume" className="text-xl text-orange-400">
        Resume
      </NavLink>
    </nav>
  );
}

export default Header;
