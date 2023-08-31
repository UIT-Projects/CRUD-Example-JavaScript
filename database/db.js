import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `Your MongoDb URI`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // Added this option to enable index creation (recommended)
            useFindAndModify: false // Added this option to disable deprecated findOneAndUpdate()
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export default Connection;
