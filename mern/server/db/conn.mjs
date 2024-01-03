import { MongoClient, ObjectId } from 'mongodb';
const uri = 'mongodb://127.0.0.1:27017/foodUserDB';
const client = new MongoClient(uri);

client.connect();

const db = client.db('foodUserDB');
const usersCollection = db.collection('users');


export { usersCollection, db };
