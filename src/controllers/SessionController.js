const User = require('../models/User')

module.exports = {
    async create(req, res) {
        const {email, password} = req.body        
        try {
            const user = await User.findOne({email})
            if (!user) return res.status(400).send('Usuário invalido.')
            if (!password) return res.status(400).send('Senha invalida.')
            return res.json(user)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}