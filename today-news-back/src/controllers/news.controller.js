const { NewModel } = require('./../models/new.model'); 
exports.getNews = async (req, res, next) => {
    try {
        const listNews = await(NewModel.find()); 
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
            author: req.body.author
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