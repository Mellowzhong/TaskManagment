import api from "../../api";
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [, setCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await api.post("/api/token/", { username, password });
            if (response.status === 200) {
                setCookie(ACCESS_TOKEN, response.data.access, { path: "/" });
                setCookie(REFRESH_TOKEN, response.data.refresh, { path: "/" });
                navigate("/");
            }
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-max mx-auto mt-20">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            <div className="h-6 mb-4 flex items-center justify-center">
                <p className={`text-sm text-center ${error ? 'text-red-500' : 'text-transparent'}`}>
                    {"Invalid username or password.\nPlease try again."}
                </p>
            </div>

            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    autoComplete="username"
                    aria-label="Username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    aria-label="Password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-indigo sm:text-sm font-medium transition duration-150"
            >
                Login
            </button>

            <p className="text-center text-sm text-gray-600 mt-4 flex items-center justify-center">
                <span className="mr-2">Don&apos;t have an account?</span> {/* Don't have an account? */}
                <Link to="/register" className="text-indigo-600 hover:underline">
                    Register here
                </Link>
            </p>
        </form>
    );
}