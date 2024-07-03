import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { getUserByEmail } from '../Services/UserServices';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
    const [, setCookie] = useCookies(['user']);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const user = await getUserByEmail(data.email, data.password);

        if (user === null) {
            console.log('user not found');
        } else {
            console.log('user found');
            setCookie('user', user, { path: '/user' });
            navigate('/task');
        }
    });

    const onClickRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label name="email">
                    Email
                    <input type="email" name="email" id="emailId" {...register("email", { required: true })} />
                </label>

                <label name="password">
                    Password
                    <input type="password" name="password" id="password" {...register("password", { required: true })} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button type='submint' onClick={onClickRegister} > Register </button>
        </div>
    );
}