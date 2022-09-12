const { NewModel } = require('./../models/new.model');

exports.getNews = async (req, res, next) => {
    try {
        const listArchiveNews = req.query.archived ?? false; 
        const listNews = await NewModel.find({
            archiveAt: {$exists:listArchiveNews}
        }).sort({ createAt: 1}) 
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

exports.archiveNew = async(req,res,next) => {
    try{
        const newArchived = await NewModel.findByIdAndUpdate(req.params['id'], {
            archiveAt: new Date()
        })

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


