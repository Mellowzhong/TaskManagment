import Form from "../Components/UserLoginForm";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <article>
            <Form />
            <Link to="/register">
                <button>Register</button>
            </Link>
        </article>
    );
}