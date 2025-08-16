// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { Title, Year, Poster, Type, imdbID } = movie;
    const src = Poster && Poster !== "N/A" ? Poster : "https://placehold.co/400x600?text=No+Poster";
    
    return (
    <Link to={`/detail/${imdbID}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
        <img src={src} alt={Title} loading="lazy" />
    <div className="card-body">
        <h3 className="card-title" title={Title}>{Title}</h3>
        <div className="card-meta">
            <span>{Year}</span> • <span style={{ textTransform: "capitalize" }}>{Type}</span>
        </div>
    </div>
    </Link>
    );
}
