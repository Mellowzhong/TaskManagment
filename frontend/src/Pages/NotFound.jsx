import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            {/* Error Message */}
            <article className="text-center">
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-lg text-gray-600">
                    The page you are looking for does not exist or has been moved.
                </p>
            </article>

            {/* Button to Redirect */}
            <Link to="/">
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                    Go to Home
                </button>
            </Link>
        </div>
    );
}
