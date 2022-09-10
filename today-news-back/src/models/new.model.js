const mongoose = require('mongoose'); 

const NewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Una noticia debe tener un titulo'],
        maxlength: [25, 'Un titulo de una noticia no puede tener mas de 25 caracteres']
    },
    description: {
        type: String,
    },
    date: Date,
    content: String,
    author: String,
    archiveDate: Date
})

exports.NewModel = mongoose.model('New', NewSchema, 'news')