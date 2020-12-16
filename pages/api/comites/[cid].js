import {preInscritos} from '../../../db/db'

const handler = (req, res) => {
    const method = req.method;
    const {username, name}= req.body;
    const cid = req.query.cid;
    const result = preInscritos.filter((comite)=>comite.comite === cid) 
    /* const result = preInscritos.filter((comite)=>comite.id === parseInt(cid)) */

        switch(method){
            case 'GET':
                if (result.length > 0){
                    res.status(200).json(result);
                }else{
                    res.status(404).json({message: 'Nada Pues' })
                }
            break;
            case 'PUT':
                //Update
                res.status(200).json({
                    username: username,
                    name: name
                })
            break;
            case 'DELETE':
                //delete
                res.status(200).json(result[0]);
            break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
                res.status(405).end(`Method ${method} Not Allowed`)
        }
}

export default handler;