import Form from "../Components/UserLoginForm";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <Form />
            <br />
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}