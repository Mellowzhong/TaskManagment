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
        <article className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            {/* Header */}
            <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
                TASK MANAGEMENT
            </h1>

            {/* Greeting and Logout Section */}
            <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center mb-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Hello, {user ? user.first_name : 'Guest'}
                </h2>
                <Link to="/logout">
                    <button className="px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
                        Logout
                    </button>
                </Link>
            </section>

            {/* Notes Section */}
            <section className="w-full max-w-7xl mx-auto bg-gray-50 p-4 rounded-lg shadow-sm">
                <Note />
            </section>
        </article>
    );
}
