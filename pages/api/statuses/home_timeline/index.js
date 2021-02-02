import {preInscritos} from '../../../../db/db'

const handler = (req, res) => {
    const method = req.method;
    const {username, name}= req.body;

      switch (method) {
        case 'GET':
          // Get data from your database
          res.status(200).json(preInscritos)
          break
        case 'POST':
          res.status(200).json({
            username: username,
            name: name
          })
          break
/*         case 'PUT':
          // Update or create data in your database
          res.status(200).json({
            username: username,
            name: name
          })
          break */
        default:
          res.setHeader('Allow', ['GET', 'PUT'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
  }

  export default handler;
