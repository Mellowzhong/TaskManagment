import { useCookies } from 'react-cookie';

export default function TaskView() {
    const [cookies] = useCookies(['user']);

    return (
        <div>
            <h1>TaskView</h1>
            <h1>
                {cookies.user ? `Welcome ${cookies.user.name}` : 'You are not logged in'}
            </h1>
        </div>
    );
}