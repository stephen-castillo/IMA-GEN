import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../util/auth";
import "../styles/Navbar.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  const shouldRenderCreateButton = isLoggedIn && location.pathname !== "/protectedCreatePost";

  return (
    <nav className="navbar mt-4"> {/* Added top margin using the mt-4 class */}
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/protected" className="navbar-link">
            User
          </NavLink>
          <button className="navbar-link" onClick={logout}>
            Logout
          </button>
          {shouldRenderCreateButton && (
            <NavLink
              to="/protectedCreatePost"
              className="navbar-link"
            >
              Create
            </NavLink>
          )}
        </>
      ) : (
        <>
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="navbar-link">
            Signup
          </NavLink>
        </>
      )}
    </nav>
  );
}
