const Listas = require('../models').Listas
exports.testelista = (req, res) => {
    Listas.findAll({attributes: ['titulo']
      }).then(listas => {
        res.send(listas)
    }).catch(error => {
        res.send(error)
    })
}

exports.criarAtividade = (req, res) => {
    console.log(Listas)
    const { titulo, usuarioId } = req.body
    Listas.create({titulo, usuarioId}).then(lista => {
        res.send(lista)
    }).catch(error => {
        res.send(error)
    })
}