import {makeAutoObservable, runInAction} from 'mobx'
import {ROUTES_PREFIX} from '../config/api.config'
import axios from 'axios'
import UserStore from './UserStore'

class CoinStore {
    coinDataChart = []
    coins = []
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    getCoins = () => {
        axios.get(`${ROUTES_PREFIX}/coins`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${UserStore.token}`
            }
        })
            .then(r => {
                runInAction(() => {
                    this.coins = r.data
                })
            })
            .catch(err => console.log(err))
    }
}

export default new CoinStore()