import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/apidb', {
    useNewUrlParser: true,
    useUnifiedTopology :true,
})
    .then(db => console.log("Conexión exitosa"))
    .catch(error => console.log(error))