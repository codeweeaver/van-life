import { useState } from "react";
import { useLocation, useNavigate, Form } from "react-router";
import { loginUser } from "../api";
import { PacmanLoader } from "react-spinners";
// import { requiresAuth } from "../utils/requiresAuth";
import useAuth from "../hooks/useAuth";

// export async function loader() {
//     return await requiresAuth();
// }

export async function action({ request }) {
    console.log("this is action of the page");
}

export default function Login() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("idle");
    const { state } = useLocation();
    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [loginFormData, setloginFormData] = useState({
        email: "",
        password: "",
    });

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);
        setStatus("submitting");
        try {
            const data = await loginUser(loginFormData);
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            setError(null);
            navigate("/host");
        } catch (error) {
            setError(error);
        }
        setLoading(false);
        setStatus("idle");
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setloginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return loading ? (
        <div className="flex justify-center items-center h-[50vh]">
            <PacmanLoader color="#FF8C38" />
        </div>
    ) : (
        <div>
            <h1 className="text-center my-10 text-xl capitalize font-semibold">
                <span>
                    sign <span>in</span> to your accounts
                </span>
                <p className="text-red-400 my-2 tracking-wider text-sm ">
                    {state?.message}
                </p>
                <p className="text-red-400 my-2 tracking-wider text-sm ">
                    {error?.message}
                </p>
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-5 border border-gray-300">
                    <input
                        className="w-full py-2 px-4 h-full"
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={loginFormData.email}
                    />
                </div>
                <div className="mb-5 border border-gray-300">
                    <input
                        className="w-full py-2 px-4 h-full"
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                    />
                </div>
                <button
                    disabled={status === "submitting"}
                    className="block w-full text-center capitalize bg-accent text-white p-2 rounded-md"
                >
                    sign in
                </button>
            </form>
        </div>
    );
}
