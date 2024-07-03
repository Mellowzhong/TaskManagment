import Form from "../Components/Form";

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;