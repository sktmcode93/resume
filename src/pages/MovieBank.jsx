import MovieSection from "Components/moviebank/MovieSection";
import MainLayout from "layout/MainLayout";

const MovieBank = () => {
    return <MainLayout id="movie-bank" cn="p-main">
        <div className="right">
            <MovieSection />
        </div>
        <div className='prevent'></div>
    </MainLayout>
}

export default MovieBank;