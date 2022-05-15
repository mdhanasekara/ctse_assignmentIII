import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://surenidh:surenidh123@cluster0.k5ruz.mongodb.net/ctse?retryWrites=true&w=majority';

    try {
        
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;