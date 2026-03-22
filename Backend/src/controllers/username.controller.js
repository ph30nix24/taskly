import User from "../models/users.model.js";
export async function generateUsername(name) {
    const randomString = Math.random().toString(36).substring(2, 6);
    const cleanName = name.toLowerCase().replace(/\s+/g, "");

    const username = `${cleanName}_${randomString}`;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return generateUsername(name);
    }
    return username;
}

