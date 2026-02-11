import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        {/* LEFT: Brand */}
        <Link to="/" className="navbar-brand fw-bold text-primary">
          <span className="me-2">🏥</span>HealthHub
        </Link>

        {/* CENTER: Main Navigation (Public Pages) */}
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/patient/find-doctor">
              Find Doctor
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/patient/blood-donation">
              Blood Bank
            </Link>
          </li>

          {/* ✅ Public: Anyone can learn about organ donation */}
          <li className="nav-item">
            <Link className="nav-link" to="/organ-donation">
              Organ Donation
            </Link>
          </li>

          {/* ✅ Always Public */}
          <li className="nav-item">
            <Link className="nav-link text-danger fw-semibold" to="/emergency">
              Emergency
            </Link>
          </li>
        </ul>

        {/* RIGHT: Auth / User Actions */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          {/* Guest */}
          {!isAuthenticated && (
            <>
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary text-white">
                Register
              </Link>
            </>
          )}

          {/* Logged-in User */}
          {isAuthenticated && (
            <>
              <Link
                to={
                  user?.role === "patient"
                    ? "/patient/profile"
                    : `/${user?.role}/dashboard`
                }
                className="btn btn-outline-primary"
              >
                Profile
              </Link>

              <button onClick={handleLogout} className="btn btn-outline-danger">
                <FiLogOut className="me-1" />
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
