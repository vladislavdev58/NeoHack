import {makeAutoObservable, runInAction} from 'mobx'
import {ROUTES_PREFIX} from '../config/api.config'
import axios from 'axios'
import UserStore from './UserStore'

class CoinStore {
    coinDataChart = []
    coins = []
    notifications = []
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

    getNotifications = () => {
        axios.get(`${ROUTES_PREFIX}/events`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${UserStore.token}`
            }
        })
            .then(r => {
                runInAction(() => {
                    this.notifications = r.data
                })
            })
            .catch(err => console.log(err))
    }

    getCoinDataChart = () => {
        axios.get(`${ROUTES_PREFIX}/candles`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${UserStore.token}`
            }
        })
            .then(r => {
                runInAction(() => {
                    this.coinDataChart = r.data
                })
            })
            .catch(err => console.log(err))
    }
}

export default new CoinStore()