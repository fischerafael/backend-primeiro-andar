const Room = require('../models/Room')

module.exports = {    
    async create(req,res){
        const {title, price, city, phone, description, imgUrl} = req.body
        const {user_id} = req.headers
        try{
            const room = await Room.create({
                title,
                price,
                city,
                phone,
                description,
                imgUrl,
                user: user_id
            })
            await room.populate('user').execPopulate()
            return res.json(room)
        }catch(err){
            return res.status(400).send(err)
        }
    },
    async delete(req,res){
        const {_id} = req.params
        const {user_id} = req.headers
        if (!user_id) return res.status(400).send('Operação não permitida')              
        try {            
            let room = await Room.findOne({_id})            
            if (room.user != user_id) return res.status(400).send('Operação não permitida') 
            room = await Room.deleteOne({_id})
            return res.json('Deletado com sucesso')
        }catch(err){
            return res.status(400).send(err)
        }
    },
    async index(req,res){
        const {user_id} = req.params
        const room = await Room.find({user:user_id})            
        return res.json(room)
    }   
}
