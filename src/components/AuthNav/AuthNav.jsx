import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/register">REGISTRATION</NavLink>
      <NavLink to="/login">LOG IN</NavLink>
    </nav>
  );
}
