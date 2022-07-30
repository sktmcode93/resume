import axios from "axios";

export const api__getMovieList = async (sorting, page, limit) => {
    const subCondition = `sort_by=${sorting}&page=${page}&limit=${limit}`;
    try {
        return await axios.get(`https://yts.mx/api/v2/list_movies.json?${subCondition}`);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const api__getMovieDetail = async id => {
    try {
        return await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const api__getMovieByQueryTerm = async query_term => {
    try {
        return axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query_term}`);
    } catch (error) {
        console.log(error);
        return null;
    }
}