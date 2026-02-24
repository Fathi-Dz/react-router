import { useParams } from "react-router-dom";

export default function NotFound() {
    const params = useParams();

    return (
        <div>
            <h1>404 Not Found</h1>
            <p>Page not found: {params['*']}</p>
        </div>
    );
}