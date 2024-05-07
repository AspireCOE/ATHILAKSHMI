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
        const ackresult=await collection.insertMany(
            [{
            _id: 9,
            firstName: 'Abi',
            lastName: 'M',
            gender: 'Female',
            email: 'abi.m@abc.com',
            salary: 6300,
            department: { name: 'Analyst'},
            },
            {_id: 10,
            firstName: 'Arthi',
            lastName: 'M',
            gender: 'Female',
            email: 'arthi.m@abc.com',
            salary: 5300,
            department: { name: 'UI/UX'},
            }
        ]);
      

        console.log("the recored updated into collection with "+JSON.stringify(ackresult))
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