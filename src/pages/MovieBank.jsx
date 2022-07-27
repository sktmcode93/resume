import MovieSide from "Components/moviebank/MovieSide";
import SiteMap from "Components/SiteMap";

const MovieBank = () => {
    return <main id="movie-bank">
        <MovieSide />
        <MovieSearch />
        <SiteMap />
    </main>
}

export default MovieBank;