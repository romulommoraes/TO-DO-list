module.exports = function (app) {
    const usuarios = require('../controllers/usuariosControle.js')
    const listas = require('../controllers/listaControle.js')

    
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
    app.route('/listas')
        .get(listas.testelista)
        .post(listas.criarAtividade)
}