const { response } = require('express');


const usuariosGet = (req, res = response) => {


    res.json({
        msg: 'get api - controlador'
    });
}

const usuariosPost = (req, res = response) => {


    res.json({
        msg: 'get api - usuariosPost'
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'get api - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {


    res.json({
        msg: 'get api - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {


    res.json({
        msg: 'get api - usuariosDelete'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut,
}