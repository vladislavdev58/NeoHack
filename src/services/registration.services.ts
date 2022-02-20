import {api} from '../api/api'
import {API_HOST, ROUTES_PREFIX} from '../config/api.config'

export const register = async (email: string, password: string) => {
	return await api.post(`${ROUTES_PREFIX}/auth/register`, {
		email,
		password
	})

}