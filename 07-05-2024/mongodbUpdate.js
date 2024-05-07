const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/aspire';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        const db=client.db('aspire')
        const collection=db.collection('employee');
        const cursor=collection.find({});
        //update
const updateResult = await collection.updateOne(
    { _id: 9 },
    { $set: {
        firstName: 'Mitheun',
        lastName: 'S',
        gender: 'Male',
        email: 'mitheun75@example.com',
        salary: 8900,
        department: { name: 'Embedded C' }
    }}
);        

        console.log("the recored updated into collection with "+JSON.stringify(updateResult))
        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close();
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();