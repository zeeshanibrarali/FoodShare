// import express from "express";
// import cors from "cors";
// import { fileURLToPath } from 'url';
// import path from "path";
// import "./loadEnvironment.mjs";
// // import session from 'express-session';
// // import connectMongo from 'connect-mongo';
// import homeRoute from "./routes/homeRoute.mjs";
// import dashboardRoute from "./routes/dashboardRoute.mjs";
// import authRoutes from './routes/authRoute.mjs';
// // import { db, mongoose } from "./db/conn.mjs";
// import passport from 'passport';
// import LocalStrategy from 'passport-local';
// import { usersCollection } from './db/conn.mjs';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const PORT = 5050;
// const app = express();

// app.use(express.static(path.join(__dirname, "../client")));

// app.use(cors());
// app.use(express.json());

// // // Create a new instance of MongoStore using the create method
// // const MongoStore = connectMongo.create({
// //   mongoUrl: 'mongodb://127.0.0.1:27017/foodUserDB',
// //   ttl: 14 * 24 * 60 * 60, // Time to live in seconds
// // });

// // // Then use MongoStore as the store for your sessions
// // app.use(session({
// //   secret: 'wow',
// //   resave: false,
// //   saveUninitialized: true,
// //   store: MongoStore,
// //   cookie: {
// //     maxAge: 1000 * 60 * 60 * 24,
// //   },
// // }));

// // Passport configuration
// app.use(passport.initialize());
// app.use(passport.session());

// // Passport local strategy configuration
// passport.use(
//   new LocalStrategy((username, password, done) => {
//     usersCollection.findOne({ username }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (!user || user.password !== password) {
//         return done(null, false, { message: 'Incorrect username or password.' });
//       }
//       return done(null, user);
//     });
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   usersCollection.findOne({ _id: id }, (err, user) => {
//     done(err, user);
//   });
// });

// app.use("/", homeRoute);
// app.use("/dashboard", dashboardRoute);
// app.use("/auth", authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


import app from './app.mjs';

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
