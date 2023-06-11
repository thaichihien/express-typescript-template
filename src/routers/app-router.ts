import {Router} from 'express'
import testRouter from './test-router'



class AppRouter{
    private _router = Router()
    get router(){return this._router}
    private _testRouter = testRouter


    constructor(){
        this._config()
    }

    private _config() {
        this._router.use('/',this._testRouter)


    }

}

export = new AppRouter().router


