import React, { useEffect, useState } from "react";
import Note from "../Note/Views/Note";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from '../constants';
import { useCookies } from 'react-cookie';
import { getUserId } from "../Utilities/Decoded";
import { getUser } from "../User/Services/UserServices";

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
        <article>
            <section>
                <h1>Hello {user ? user.first_name : ''}</h1>
                <Link to="/logout">
                    <button>Logout</button>
                </Link>
            </section>
            <Note />
        </article>
    );
}