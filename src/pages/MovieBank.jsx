import MovieSide from "Components/moviebank/MovieSide";
import SiteMap from "Components/SiteMap";
import MovieSection from "Components/moviebank/MovieSection";

const MovieBank = () => {
    return <main id="movie-bank">
        <MovieSide />
        <div className="right">
            <MovieSection />
        </div>
        <SiteMap />
    </main>
}

export default MovieBank;