import api from "../../api";
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/api/token/", { username, password });
            if (response.status === 200) {
                setCookie(ACCESS_TOKEN, response.data.access, { path: '/' });
                setCookie(REFRESH_TOKEN, response.data.refresh, { path: '/' });

                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>
                Username:
                <input
                    id="username"
                    autoComplete="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
            </label>
            <br />
            <button type="submit">
                Login
            </button>
        </form>
    );
}