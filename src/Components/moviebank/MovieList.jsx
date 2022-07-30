import $ from 'jquery';
import { memo, useState } from "react";

import ModalMovieDetail from './Modal__MovieDetail';

import { api__getMovieDetail } from "js/serviceApi";
import noImg from 'images/no_image.png';

const MovieList = ({ movieData }) => {
    const [detail, setDetail] = useState(null);

    // API_EVENT : id값에 따라 클릭한 영화정보를 가지고 오는 함수
    const selectMovie = async id => {
        if ($(".prevent").css("display") === "block") return;
        $(".prevent").show();
        try {
            const result = await api__getMovieDetail(id);
            if (!result) throw new Error();
            setDetail(result.data.data.movie);
        } catch { }
        $(".prevent").hide();
    }
    return <section className="movie-list scroll-design1">
        <ul>
            {movieData.map(({ medium_cover_image, title, title_long, rating, synopsis, genres, id }) => (
                <li key={`movie_data_${id}`}>
                    <div>
                        <img src={medium_cover_image} alt={title} onClick={() => selectMovie(id)} onError={e => { e.target.src = noImg; }} />
                    </div>
                    <aside>
                        <h4 title={title_long}>{title_long}</h4>
                        <span>Rating : {rating}</span>
                        <p className='scroll-design1'>{synopsis}</p>
                        <ol><li>Genres : </li>{genres.map((g, idx) => <li key={`movie_genres_${id}_${idx}`}>{g}</li>)}</ol>
                    </aside>
                </li>
            ))}
        </ul>
        {detail && <ModalMovieDetail detail={detail} setDetail={setDetail} />}
    </section>
}

export default memo(MovieList);