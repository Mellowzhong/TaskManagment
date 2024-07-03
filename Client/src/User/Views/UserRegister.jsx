import { useForm } from 'react-hook-form';
import { createUser } from '../Services/UserServices';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

export default function UserRegister() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        if (data.password1 !== data.password2) {
            console.log('Passwords do not match');
            return;
        } else {
            const user = {
                name: data.name,
                email: data.email,
                password: data.password1
            }
            const newUser = await createUser(user, user.email);
            if (newUser === null) {
                console.log('User not created');
            } else {
                console.log('User created');
                navigate('/');
            }

        }
    });

    const onClickLogin = () => {
        navigate('/');
    }

    return (
        <div>
        <UserForm onSubmit={onSubmit} register={register} />
            <button type='submint' onClick={onClickLogin}>Login</button>
        </div>
    );
}
