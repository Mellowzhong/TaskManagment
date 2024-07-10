import Form from "../Components/UserForm";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <br />
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}