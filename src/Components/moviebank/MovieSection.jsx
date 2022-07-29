import { useState } from "react";
import { memo } from "react";
import MovieSearch from "./MovieSearch";

const MoiveSection = () => {
    const [movieData, setMovieData] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        page: 1,
        totalCount: 0,
        sorted_by: "date_added",
        viewCount: 20
    })
    const searchProps = { setMovieData, pageInfo, setPageInfo };
    return <>
        <MovieSearch {...searchProps} />

    </>
}

export default memo(MoiveSection);