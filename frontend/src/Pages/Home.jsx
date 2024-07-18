import Note from "../Note/Views/Note";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from '../constants';
import { useCookies } from 'react-cookie';
import { getUserId } from "../Utilities/Decoded";
import { getUser } from "../User/Services/UserServices";
import { useEffect, useState } from "react";

export default function Home() {
    const [cookies] = useCookies([ACCESS_TOKEN]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = cookies[ACCESS_TOKEN];
            const userId = getUserId(token);
            const userData = await getUser(userId);
            if (userData.success) {
                setUser(userData.data);
            } else {
                console.error("Error fetching user data");
            }
        };

        fetchUserData();
    }, [cookies]);

    return (
        <article className="home-page">
            <section className="welcome-message">
                <h1>Hello {user ? user.first_name : ''}</h1>
                <Link to="/logout">
                    <button className="logout-button">Logout</button>
                </Link>
            </section>
            <section className="note">
                <Note />
            </section>
        </article>
    );
}