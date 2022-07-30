import { useEffect } from "react";

import noImg from 'images/no_image.png';

const ModalMovieDetail = ({ detail, setDetail }) => {
    const { title_long, medium_cover_image, title, rating, description_full, genres } = detail;
    const outClick = e => {
        for (let p of e.path) {
            if (p.className.includes("movie-detail")) return;
        }
        window.removeEventListener("click", outClick);
        setDetail(null);
    }
    useEffect(() => { window.addEventListener("click", outClick) }, [])
    return <section className="movie-detail">
        <button onClick={() => { setDetail(null) }}>X</button>
        <article>
            <figure>
                <img src={medium_cover_image} alt={title} onError={e => { e.target.src = noImg }} />
                <figcaption>{title_long}</figcaption>
            </figure>
            <aside className="movie-detail-info">
                <span>Rating : {rating}</span>
                <p>{description_full}</p>
                <ol><li>Genres : </li>{genres.map((g, idx) => <li key={`movie_genres_${id}_${idx}`}>{g}</li>)}</ol>
            </aside>
        </article>
    </section>
}

export default ModalMovieDetail;