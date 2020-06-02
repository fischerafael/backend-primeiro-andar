const Room = require('../models/Room')

module.exports = {
    async index(req,res){
        try{
            const room = await Room.find()                     
            return res.json(room)
        }catch(err){
            return res.status(400).send(err)
        }
    }
}