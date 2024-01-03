
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  firstname: String,
  lastname: String,
  address: String,
  phone: String,
  gender: String,
  accountType: String,
});

// Use passport-local-mongoose plugin
userSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', userSchema);
