import { api__getMovieList } from "js/serviceApi";
import { memo, useState, useEffect } from "react";
import MovieList from "./MovieList";

import MovieSearch from "./MovieSearch";

const MoiveSection = () => {
    let prevent = false;

    const [movieData, setMovieData] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        page: 1,
        totalCount: 0,
        sorted_by: "year",
        viewCount: 20
    })

    // API_EVENT : 각 조건에 해당하는 영화 리스트를 불러와주는 함수
    const getMovieList = async init => {
        if (prevent) return;
        prevent = true;
        setTimeout(() => { prevent = false; }, 200);

        try {
            const { sorted_by, page, viewCount } = pageInfo;
            const result = await api__getMovieList(sorted_by, init || page, viewCount);
            const { movie_count, movies } = result.data.data;
            setPageInfo(prev => {
                const clone = { ...prev };
                clone.totalCount = movie_count;
                clone.page = init || page;
                return clone;
            })
            setMovieData(movies);
        } catch (error) {

        }
    }


    // Effect_Fn : 카테고리와 보기개수를 변경할 경우 첫번째 페이지 데이터로 호출
    useEffect(() => { getMovieList(1) }, [pageInfo.sorted_by, pageInfo.viewCount])

    // Effect_Fn : 페이지를 변경할 경우 해당 페이지 데이터로 호출
    useEffect(() => { getMovieList() }, [pageInfo.page])

    const searchProps = { setMovieData, pageInfo, setPageInfo };
    return <>
        <MovieSearch {...searchProps} />
        <MovieList movieData={movieData} />
    </>
}

export default memo(MoiveSection);