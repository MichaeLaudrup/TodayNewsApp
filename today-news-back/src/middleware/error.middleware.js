exports.processError = async (err, req, res, next) => {
    //Aqui codigo para gestionar errores personalizados
    res.status(500).json({
        status: 'error',
        message: err.message
    })
}