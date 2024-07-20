import Form from "../Components/UserRegisterForm";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <article className="login-register-form">
            <Form />
            <Link to="/login">
                <button>Login</button>
            </Link>
        </article>
    );
}