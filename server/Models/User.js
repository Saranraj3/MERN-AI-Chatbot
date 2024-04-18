import mongoose from 'mongoose';
import { randomUUID } from 'crypto';
const ChatSchema = new mongoose.Schema({
    id: { type: String, default: randomUUID() },
    role: { type: String, require: true },
    content: { type: String, require: true }
})
const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    chats: [ChatSchema]

})

export default mongoose.model('User', UserSchema);