import Form from "../Components/UserRegisterForm";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <Form />
            <br />
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    );
}