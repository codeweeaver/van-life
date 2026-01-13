import { Navigate, Outlet } from "react-router";
import BaseLink from "../components/base/BaseLink";
import useAuth from "../hooks/useAuth";

export default function HostLayout() {
  const { user } = useAuth();
  return (
    <>
      <ul className="flex gap-5 py-10">
        <li>
          <BaseLink to="." end className="underline">
            Dashboard
          </BaseLink>
        </li>
        <li>
          <BaseLink to="income">Income</BaseLink>
        </li>
        <li>
          <BaseLink to="vans">Vans</BaseLink>
        </li>
        <li>
          <BaseLink to="reviews">Reviews</BaseLink>
        </li>
      </ul>
      {user ? (
        <Outlet />
      ) : (
        <Navigate
          to="/login"
          state={{ message: "you must login first." }}
          replace={true}
        />
      )}
    </>
  );
}
