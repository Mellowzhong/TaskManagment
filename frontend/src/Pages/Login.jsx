import Form from "../Components/UserForm";

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;