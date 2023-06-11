import {Router} from 'express'
import controller from '../controllers/test-controller'

class TestRouter{
    private _controller = controller
    private _router = Router()
    get router() {
        return this._router
    }

    constructor(){
        this._config()
    }

    private _config() {
        this._router.get('/',this._controller.testMain)
    }


}

export = new TestRouter().router


