import {makeAutoObservable} from 'mobx'

class UserStore {

    handleCoin = ['BitCoin', 'DogCoin', 'CatCoin']

    constructor() {
        makeAutoObservable(this)
    }
}

export default new UserStore()