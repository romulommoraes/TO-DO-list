module.exports = function (app) {
    const usuarios = require('../controllers/usuariosControle.js')
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}