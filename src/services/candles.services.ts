import {runInAction} from 'mobx'
import CoinStore from '../store/CoinStore'
import {candlesAPIRoutes} from '../config/routes.config'
import axios from 'axios'
import {API_HEADERS} from '../config/api.config'

export const getOne = async () => {
    runInAction(() => {
        CoinStore.loading = true
    })

    try {
        const result = await axios.get(candlesAPIRoutes.get(), {
            headers: {
                ...API_HEADERS
            }
        })
        console.log(result)
    } catch (e) {

    }
}