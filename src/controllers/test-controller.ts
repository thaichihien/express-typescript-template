import {Request,Response} from 'express'
import path from 'path'

class TestController {

    testMain = async (req : Request,res : Response) =>  {
       
        // const serverinfo = {
        //     "server" : "Express TypeScript Template",
        //     "author" : "Chi Hien",
        //     "release date" : "06/11/2023"
        // }
        res.sendFile(path.join(__dirname,'/public/index.html'))
    }


}

export = new TestController()