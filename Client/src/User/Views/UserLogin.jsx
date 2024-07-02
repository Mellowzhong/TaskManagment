import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { getUserByEmail } from '../Services/UserServices';

export default function UserLogin() {
    const [cookies, setCookie] = useCookies(['user']);
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        console.log('login submitted');
        const user = await getUserByEmail(data.email);
        console.log('user fetched');
        console.log(user);
        setCookie('user', user, { path: '/user' });
        console.log(cookies.user);
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