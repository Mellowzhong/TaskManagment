import { useState } from "react";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(route, { username, password });
            if (response.status === 200 && method === "login") {
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

    const tittle = method === "login" ? "Login" : "Register"

    return (
        <form onSubmit={handleSubmit}>
            <h1>{tittle}</h1>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
            </label>
            <button type="submit">{tittle}</button>
        </form>
    );
}

export default Form;