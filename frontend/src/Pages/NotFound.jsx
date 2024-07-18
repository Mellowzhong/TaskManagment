import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <article>
                <h1>404 NotFound</h1>
                <p>The page is not exist!</p>
            </article>
            <button>
                <Link to="/">Go to Home</Link>
            </button>
        </>
    );
}