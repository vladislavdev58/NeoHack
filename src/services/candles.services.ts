import {runInAction} from 'mobx'
import CoinStore from '../store/CoinStore'
import {api} from '../api/api'
import {candlesAPIRoutes} from '../config/routes.config'

export const getOne = async () => {
    runInAction(() => {
        CoinStore.loading = true
    })

    try {
        const result = await api.get(candlesAPIRoutes.get())
        console.log(result)
    } catch (e) {

    }
}