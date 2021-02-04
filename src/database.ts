import mongoose, {ConnectOptions}from 'mongoose';

(async () =>{
    const mongooseOption: ConnectOptions ={
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
    await mongoose.connect('mongodb://localhost/mern-database', mongooseOption)
    console.log('database is connected')
})()