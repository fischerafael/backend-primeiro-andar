const User = require('../models/User')

module.exports = {
    async create(req, res){
        const {email, password, phone} = req.body
        let user = await User.findOne({email})
        if (user) return res.status(400).send('Usuário já existe')
        try {
            user = await User.create({
                email,
                password,
                phone,
            })
            return res.json({email})
        } catch (err) {
            return res.status(400).send(err)
        }      
    },
    async index(req, res){
        try {
            const users = await User.find()
            return res.json(users)
        } catch (err) {
            return res.status(400).send(err)
        }
    },        
}