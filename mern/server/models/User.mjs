import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  telephone: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Prefer Not to Say'],
  },
  accountType: {
    type: String,
    enum: ['Volunteer', 'Donor'],
  },
});

userSchema.methods.validatePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
      } catch (error) {
        console.error('Error validating password:', error);
        return false;
      }
};

userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password') || this.isNew) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);

export default User;
