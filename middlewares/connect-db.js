import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connectDB() {

    const dbURI = process.env.MONGO_URI;


    const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true,
        dbName:"TaskList"
    };


    connect(dbURI, mongooseOptions)
        .then(() => {
            console.log('Conexión exitosa a MongoDB Atlas');
        })
        .catch((err) => {
            console.error('Error al conectar a MongoDB Atlas:', err);
        });
}

export default connectDB;