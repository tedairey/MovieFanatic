import axios from "axios"

const base_url = 'https://api.themoviedb.org/3'
const api_key = 'a2742f14ae976047c5cfccd1b8fa2bf0'

export const getMovieById = (id) => {
    const url = `${base_url}/movie/${id}?api_key=${api_key}`

    const settings = {
		async: true,
		crossDomain: true,
		url,
		method: 'GET',
	}

	return axios(settings);
}

export const getMovieCast = (id) => {
	const url = `${base_url}/movie/${id}/credits?api_key=${api_key}`

	const settings = {
		async: true,
		crossDomain: true,
		url,
		method: 'GET',
	}

	return axios(settings);
}

export const getActor = (id) => {
	const url = `${base_url}/person/${id}?api_key=${api_key}`

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