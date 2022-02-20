import {makeAutoObservable} from 'mobx'

class UserStore {
    token = null
    handleCoin = ['BitCoin', 'DogCoin', 'CatCoin']

    constructor() {
        makeAutoObservable(this)
    }
}

export default new UserStore()