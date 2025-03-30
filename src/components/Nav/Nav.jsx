import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/news">News page</NavLink>
      <NavLink to="/notices">Notices page</NavLink>
      <NavLink to="/friends">Our friends page</NavLink>
    </nav>
  );
}
