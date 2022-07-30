import { memo, useRef, useState } from "react";

import ModalPreviewList from "./Modal__PreviewList";

import { moive_sort_list } from "js/array";
import { changeObjVal } from "js/common";
import { api__getMovieByQueryTerm } from "js/serviceApi";
import { FaSearch } from "react-icons/fa";


const MovieSearch = ({ setMovieData, pageInfo, setPageInfo }) => {
    const typing = useRef();
    const [search, setSearch] = useState("");
    const [activeInput, setActiveInput] = useState(false);
    const [finding, setFinding] = useState(false);
    const [previewList, setPreviewList] = useState([]);

    // API_EVENT : 사전검색어에 일치하는 프리뷰 데이터를 찾아주는 함수
    const findPreviewData = async e => {
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
        // try{

        // }
    }

    const previewProps = { finding, previewList, setActiveInput };

    const { sorted_by, viewCount } = pageInfo;
    return <section className="movie-search">
        <article className="search">
            <input type="text" value={search} onChange={findPreviewData} onFocus={() => setActiveInput(true)} className="search-input" />
            <button onClick={searchMovieData}><FaSearch /></button>
            {activeInput && search && <ModalPreviewList {...previewProps} />}
        </article>
        <article className="option">
            <ul>
                {moive_sort_list.map(({ value, title }, idx) => (
                    <li
                        className={value === sorted_by ? "active" : ""}
                        onClick={() => { changeObjVal("sorted_by", value, setPageInfo); }}
                        key={`movie_sort_${idx}`}
                    >{title}
                    </li>
                ))}
            </ul>
            <select value={viewCount} onChange={e => { changeObjVal("viewCount", e.target.value, setPageInfo) }}>
                <option value={20}>20개씩 보기</option>
                <option value={30}>30개씩 보기</option>
                <option value={50}>50개씩 보기</option>
            </select>
        </article>
    </section>
}

export default memo(MovieSearch);