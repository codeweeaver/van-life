import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await loginUser({ email, password });
      const redirectTo =
        new URL(window.location.href).searchParams.get("redirectTo") || "/host";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <div>
      <h1 className="text-center my-10 text-xl capitalize font-semibold">
        <span>
          sign <span>in</span> to your accounts
        </span>
        {message && (
          <p className="text-red-400 my-2 tracking-wider text-sm ">{message}</p>
        )}
        {error?.message && (
          <p className="text-red-400 my-2 tracking-wider text-sm ">
            {error.message}
          </p>
        )}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-5 border border-gray-300">
          <input
            className="w-full py-2 px-4 h-full"
            name="email"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="mb-5 border border-gray-300">
          <input
            className="w-full py-2 px-4 h-full"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
