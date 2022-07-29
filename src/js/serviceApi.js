import axios from "axios";

export const api__getMovieByQueryTerm = async query_term => {
    try {
        return axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query_term}`);
    } catch (error) {
        console.log(error);
        return null;
    }
}