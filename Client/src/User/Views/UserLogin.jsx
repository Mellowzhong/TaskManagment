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
        console.log(user);

        if (user === null) {
            console.log('user not found');
        } else {
            setCookie('user', user, { path: '/user' });
            console.log('login submitted');
            navigate('/task');
        }
    });

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="emailId" {...register("email", { required: true })} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" {...register("password", { required: true })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}