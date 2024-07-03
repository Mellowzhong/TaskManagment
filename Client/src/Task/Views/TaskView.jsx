import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getTasks } from '../Services/TaskServices';

export default function TaskView() {
    const [cookies] = useCookies(['user']);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const fetchedTasks = await getTasks();
                setTasks(fetchedTasks);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }

        fetchTasks();
    }, []);

    function Tasks() {
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        if (tasks.length === 0) return <div>No tasks found.</div>;

        return (
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.desciption}</p>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h1>TaskView</h1>
            <h2>
                {cookies.user ? `Welcome ${cookies.user.name}` : 'You are not logged in'}
            </h2>
            <Tasks />
        </div>
    );
}