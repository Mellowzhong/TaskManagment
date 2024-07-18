import Form from "../Components/UserRegisterForm";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <article>
            <Form />
            <Link to="/login">
                <button>Login</button>
            </Link>
        </article>
    );
}