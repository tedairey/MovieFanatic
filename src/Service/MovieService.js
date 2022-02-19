import axios from "axios"
import { base_url, api_key } from "../Config"

export const getMovieById = (id, type) => {
    const url = `${base_url}/${type}/${id}?api_key=${api_key}`

    const settings = {
		async: true,
		crossDomain: true,
		url,
		method: 'GET',
	}

	return axios(settings);
}

export const getMovieCast = (id, type) => {
	const url = `${base_url}/${type}/${id}/credits?api_key=${api_key}`

	const settings = {
		async: true,
		crossDomain: true,
		url,
		method: 'GET',
	}

	return axios(settings);
}

export const getTrendingMovies = () => {
    const url = `${base_url}/trending/all/day?api_key=${api_key}`

    const settings = {
		async: true,
		crossDomain: true,
		url,
		method: 'GET',
	}

	return axios(settings);
}