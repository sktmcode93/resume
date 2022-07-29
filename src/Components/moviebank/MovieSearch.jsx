import { api__getMovieByQueryTerm } from "js/serviceApi";
import { memo, useRef, useState } from "react";

import { FaSearch } from "react-icons/fa";
import ModalPreviewList from "./Modal__PreviewList";

const MovieSearch = ({ setMovieData, pageInfo, setPageInfo }) => {
    const typing = useRef();
    const [search, setSearch] = useState("");
    const [activeInput, setActiveInput] = useState(false);
    const [finding, setFinding] = useState(false);
    const [previewList, setPreviewList] = useState([]);

    const changeSortBy = t => {
        console.log(t);
    }

    const matchingData = e => {
        clearTimeout(typing.current);
        const { value } = e.target;
        setFinding(true);
        typing.current = setTimeout(async () => {
            const result = await api__getMovieByQueryTerm(value);
            if (result) {
                const { data } = result.data;
                setPreviewList(!data.movie_count ? [] : data.movies);
            }
            setFinding(false);
        }, 500);
        setSearch(value);
    }

    const searchMovieData = async () => {

    }

    const previewProps = { finding, previewList, setActiveInput };
    return <section className="movie-search">
        <div>
            <input type="text" value={search} onChange={matchingData} onFocus={() => setActiveInput(true)} />
            <button onClick={searchMovieData}><FaSearch /></button>
            {activeInput && search && <ModalPreviewList {...previewProps} />}
        </div>
        <ul>
            <li onClick={() => changeSortBy("year")}>최신순</li>
            <li onClick={() => changeSortBy("rating")}>평점순</li>
            <li onClick={() => changeSortBy("download_count")}>다운로드순</li>
        </ul>
        {/* <select value={viewCount} onChange={e => setViewCount(e.target.value)}>
            <option value={20}>20개씩 보기</option>
            <option value={30}>30개씩 보기</option>
            <option value={50}>50개씩 보기</option>
        </select> */}
    </section>
}

export default memo(MovieSearch);