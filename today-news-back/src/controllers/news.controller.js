const { NewModel } = require('./../models/new.model');

/**
 * Este metodo las noticias, si se recibe como query param un
 * atributo archived puesto a true entonces se devolveran lar noticias
 * archivadas en caso contrario se devolveran aquellas noticias que no estan archivadas
 * @param { Requirimiento } req 
 * @param { Respuesta} res 
 * @param { Siguiente funcion midelware} next 
 */
exports.getNews = async (req, res, next) => {
    try {
        const listArchiveNews = req.query.archived ?? false; 

        const sortCriteria = (listArchiveNews) ? {archiveAt: 1} : {createAt:1}; 

        const listNews = await NewModel.find({
            archiveAt: {$exists:listArchiveNews}
        }).sort(sortCriteria) 
        res.status(201).json({
            status:'success',
            data: [
                ...listNews
            ]
        })
    } catch (error) {
        next(error); 
    }
}

/**
 * Este metodo inserta una nueva noticia en la base de datos mongo
 * @param { Requirimiento } req 
 * @param { Respuesta} res 
 * @param { Siguiente funcion midelware} next 
 */
exports.addNew = async(req, res, next) => {
    try {
        const articleCreated = await NewModel.create({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            author: req.body.author,
        });
        res.status(201).json({
            status:'success',
            data: {
                articleCreated
            }
        }) 
    } catch (error) {
        next(error); 
    }
}

/**
 * Este metodo inserta una foto en una noticia ya existente previamente segun indentificador recibido como 
 * parametro de ruta
 * @param { Requirimiento } req 
 * @param { Respuesta} res 
 * @param { Siguiente funcion midelware} next 
 */
exports.addPhotoToNew = async(req, res, next) => {
    try {
        const articledUpdated = await NewModel.findByIdAndUpdate(req.params['id'], {
            imgFileName: req.file.filename 
        },{ 
            new: true, //return de "new" document
            runValidators: false,
        });
        res.status(201).json({
            status:'success',
            data: {
                articledUpdated
            }
        }) 
    } catch (error) {
        next(error); 
    }
}

/**
 * Este metodo elimina una noticia dado un identificador de noticia
 * @param { Requirimiento } req 
 * @param { Respuesta} res 
 * @param { Siguiente funcion midelware} next 
 */
exports.deleteNew = async(req, res, next) => {
    try {
        const deleted = await NewModel.findByIdAndDelete(req.params['id'])
        res.status(201).json({
            status:'success',
        }) 
    } catch (error) {
        next(error); 
    }
}


/**
 * Este metodo establece si una noticia debe ser archivada o no
 * @param { Requirimiento } req 
 * @param { Respuesta} res 
 * @param { Siguiente funcion midelware} next 
 */
exports.archiveNew = async(req,res,next) => {
    try{
        let newArchived; 
        const archiveAt = req.body.archiveDate;
        if(archiveAt){
            newArchived = await NewModel.findByIdAndUpdate(req.params['id'], {
                archiveAt: req.body.archiveDate 
            })
        }else{
            newArchived = await NewModel.findByIdAndUpdate(req.params['id'], {
                $unset: {archiveAt: 1}
            })
        }

        res.status(201).json({
            status: 'success',
            data: {
                newArchived
            }
        })
    }catch(error){
        next(error)
    }
}


