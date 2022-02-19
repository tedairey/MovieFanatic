import axios from "axios"
import { base_url, api_key } from "../Config"

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

export const getMovieCredits = (id) => {
    const url = `${base_url}/person/${id}/combined_credits?api_key=${api_key}`

    const settings = {
		async: true,
		crossDomain: true,
		url,
		method: 'GET',
	}

	return axios(settings);
}