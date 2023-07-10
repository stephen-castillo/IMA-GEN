import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../util/auth";
import "../styles/Navbar.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  const shouldRenderCreateButton = isLoggedIn && location.pathname !== "/protectedCreatePost";

  return (
    <nav className="navbar mt-4 ml-4 mb-4"> {/* Added top margin using the mt-4 class */}
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/protected" className="navbar-link ml-2">
            User
          </NavLink>
          <button className="navbar-link ml-2" onClick={logout}>
            Logout
          </button>
          {shouldRenderCreateButton && (
            <NavLink
              to="/protectedCreatePost"
              className="navbar-link ml-auto mr-4 create-button"
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
