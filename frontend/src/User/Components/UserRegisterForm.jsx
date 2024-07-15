import api from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/api/user/register/", { username, first_name, last_name, email, password });
            if (response.status === 201) {
                navigate("/login");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="userForm">
                <legend>
                    <h1>Register</h1>
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
                <small>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only</small>
                <label>
                    <p>First Name:</p>
                    <input
                        id="first_name"
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                </label>
                <label>
                    <p>Last Name:</p>
                    <input
                        id="last_name"
                        type="text"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                </label>
                <label>
                    <p>Email adress:</p>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                </label>
                <button type="submit">
                    Register User
                </button>
            </fieldset>
        </form>
    );
}