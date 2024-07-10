import Form from "../Components/UserForm";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <Form route="/api/user/register/" method="register" />
            <br />
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    );
}