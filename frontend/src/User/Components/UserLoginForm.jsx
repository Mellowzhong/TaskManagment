import api from "../../api";
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, setCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
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
        <>
            <form onSubmit={handleSubmit}>
                <fieldset className="userForm">
                    <legend>
                        <h1>Login</h1>
                    </legend>
                    <label>
                        <p>Username:</p>
                        <input
                            id="username"
                            autoComplete="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="username"
                        />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*************"
                        />
                    </label>
                    <button type="submit">
                        Login
                    </button>
                </fieldset>
            </form >
        </>
    );
}