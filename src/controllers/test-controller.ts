import {Request,Response} from 'express'


class TestController {

    testMain = async (req : Request,res : Response) =>  {
       
        const serverinfo = {
            "server" : "Express TypeScript Template",
            "author" : "Chi Hien",
            "release date" : "06/11/2023"
        }
        res.send(serverinfo)
    }


}

export = new TestController()