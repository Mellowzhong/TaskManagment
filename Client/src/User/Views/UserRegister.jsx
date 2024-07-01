import { useForm } from 'react-hook-form';
import { createUser } from '../Services/UserServices';
import UserForm from '../components/UserForm';

export default function UserRegister() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        console.log('Form submitted');
        if (data.password1 !== data.password2) {
            console.log('Passwords do not match');
            return;
        } else {
            const user = {
                name: data.name,
                email: data.email,
                password: data.password1
            }
            const newUser = await createUser(user);
            console.log(newUser);
        }
    });

    return <UserForm onSubmit={onSubmit} register={register} />;
}
