const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    //funcao do tipo async, o await espera até que todos os produtos sejam recuperados, só assim ele executa a linha a seguir
    async index(req, res) {

        //pegar a var que esta na url 
        const { page = 1} = req.query
        
        await Product.paginate({}, { page, limit: 10 })
            .then(data => {
                return res.json(data) 
            })
            .catch(error => {
                return res.json(error)
            })
    },

    async show(req, res){
        await Product.findById(req.params.id)
        .then(data => {
            return res.json(data)
        })
        .catch(error => {
            return res.json(error)
        })
    },

    async store(req, res){
        await Product.create(req.body)
        .then(data => {
            return res.json(data)
        })
        .catch(error => {
            return res.json(error)
        })
    },

    async update(req, res){
        await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => {
            return res.json(data)
        })
        .catch(error => {
            return res.json(error)
        })
    },

    async destroy(req, res){
        await Product.findByIdAndDelete(req.params.id)
        .then(data => {
            return res.json("Item eliminado")
        })
        .catch(error => {
            return res.json(error)
        })
    }
}

