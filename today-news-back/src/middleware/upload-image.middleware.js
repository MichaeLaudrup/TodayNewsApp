
const multer = require('multer'); 

const multerStorage = multer.diskStorage({
    destination: (req,file, cb) => {
        console.log('xDDDDDDDD')
        cb(null, `${__dirname}/../public`)
    },
    filename: (req, file, cb) => {
        console.log('xDDDDDDDD')
        const ext = file.mimetype.split('/')[1]; 
        const pathName = `new-${Math.trunc(Math.random() * 100)}-${new Date().toISOString().replace(/:/g, '-')}.${ext}`;
        console.log(pathName)
        cb(null, pathName ); 
    }
}); 

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        console.log('por aqui')
        cb(null, true); 
    }else{
        cb(new Error('Tipo de archivo no soportado, introduzca una imagen'), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
}); 

/* Middle ware que se encarga de capturar la imagen y almacenarla en servidor */
exports.uploadUserPhotoMiddleware = upload.single('photo')