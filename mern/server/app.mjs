
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import passport from './config/passport.mjs';
import authRoutes from './routes/authRoute.mjs';
import personalInfoRoutes from './routes/personalInfoRoute.mjs';

const app = express();
app.use(cors());
const MongoStore = connectMongo(session);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/donateDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Use sessions to track login state
const store = new MongoStore({ mongooseConnection: mongoose.connection });
app.use(
    session({
        secret: uuidv4(),
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/auth/register', (req, res) => {
    const filePath = path.resolve(__dirname, 'public/auth/register.mjs');
    res.sendFile(filePath, {
        type: 'application/javascript',
    });
});

// Routes
app.use('/auth', authRoutes);
app.use('/personal-info', personalInfoRoutes);

export default app;
