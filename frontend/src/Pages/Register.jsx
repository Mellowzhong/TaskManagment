import Form from "../Components/UserForm";

function Register() {
    return (
        <div>
            <Form route="/api/user/register/" method="register" />
        </div>
    );
}

export default Register;