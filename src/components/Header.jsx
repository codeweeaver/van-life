import { Link, useNavigate } from "react-router";
import imageUrl from "../assets/images/avatar-icon.png";
import useAuth from "../hooks/useAuth";
import BaseLink from "./base/BaseLink";

export default function Header() {
  const { user, logoutUser } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 py-6 shadow-sm bg-primary-light">
      <div className="flex items-center justify-between wrapper">
        <Link to="/" className="text-3xl font-bold uppercase">
          #van<span className="text-amber-500">life</span>
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <BaseLink to="/host">Host</BaseLink>
          </li>
          <li>
            <BaseLink to="/about">About</BaseLink>
          </li>
          <li>
            <BaseLink to="/vans">Vans</BaseLink>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  logoutUser();
                  navigate("/");
                }}
                className="capitalize p-2 px-4 rounded-lg bg-accent text-white"
              >
                logout
              </button>
            ) : (
              <BaseLink to="/login">
                <img src={imageUrl} alt="login profile image" />
              </BaseLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
