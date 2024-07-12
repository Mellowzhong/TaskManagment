import Note from "../Note/Views/Note"
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div>
            <div>
                <Link to="/logout">
                    <button>Logout</button>
                </Link>
            </div>
            <Note />
        </div>
    );
}