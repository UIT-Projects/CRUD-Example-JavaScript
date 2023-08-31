import User from '../model/user.js';

// Get all users
export const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};

// Save data of the user in the database
export const addUser = async (request, response) => {
    const user = new User(request.body);
    
    try {
        const newUser = await user.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

// Get a user by id
export const getUserById = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        if (user) {
            response.status(200).json(user);
        } else {
            response.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};

// Update data of a user in the database
export const editUser = async (request, response) => {
    const updatedUserData = request.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            request.params.id,
            updatedUserData,
            { new: true }
        );
        
        if (updatedUser) {
            response.status(200).json(updatedUser);
        } else {
            response.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

// Delete data of a user from the database
export const deleteUser = async (request, response) => {
    try {
        const deletedUser = await User.findByIdAndDelete(request.params.id);
        if (deletedUser) {
            response.status(200).json({ message: "User deleted successfully" });
        } else {
            response.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};
