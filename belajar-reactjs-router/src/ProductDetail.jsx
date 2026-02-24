import { useParams } from "react-router-dom";

export default function ProductDetail() {
    return (
        <div>
            <h1>Product Detail {useParams().name} {useParams().id}</h1>
            <p>Detail: {useParams().detail}</p>
        </div>
    );
}