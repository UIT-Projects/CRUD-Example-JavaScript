import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

// Initialize auto-increment plugin with the connection
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId' }); // Adjust 'User' and 'userId' to your needs

// Create the user model
const User = mongoose.model('User', userSchema);

export default User;
