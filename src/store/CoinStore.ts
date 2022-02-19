import {makeAutoObservable} from 'mobx'

class CoinStore {

    coinDataChart = []
    loading = false

    constructor() {
        makeAutoObservable(this)
    }
}

export default new CoinStore()