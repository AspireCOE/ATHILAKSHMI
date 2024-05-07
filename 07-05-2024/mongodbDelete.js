const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/aspire';

// Create a new MongoClient
const client = new MongoClient(uri);

async function deleteDocument() {
    try {
        await client.connect();
        const db = client.db('aspire');
        const collection = db.collection('employee');

        // Delete a single document
        const deleteResult = await collection.deleteOne({ _id: 9 });
        console.log("Deleted count: " + deleteResult.deletedCount);

        // Find and print remaining documents
        const cursor = collection.find({});
        await cursor.forEach(record => {
            console.log(record);
        });

        await client.close();
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to delete the document
deleteDocument();
