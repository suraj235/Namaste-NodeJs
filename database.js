const {MongoClient} =require('mongodb');

const url = `mongodb+srv://surajdev:1dfwjWFHNxNIgz2M@namastenode.nvsdwgv.mongodb.net/`;

const client = new MongoClient(url);
const dbName = 'FirstDB';

async function main() {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection('User');
    
    // Create a new user
    const newUser = { firstName: "Ritika", lastName: "Sharma", profession: "Professor", city: "Heart of Suraj" };
    // const insertResult = await collection.insertMany([newUser]);

    // Update the user
    // const updateResult = await collection.updateOne(
    //     { firstName: "Ritika" },
    //     { $set: { profession: "Professor" } }
    // );
    // console.log("User updated:", updateResult.modifiedCount);

    // Delete the user
    // const deleteResult = await collection.deleteOne({ firstName: "Ritika" });
    // console.log("User deleted:", deleteResult.deletedCount);

    // Get all users
    const findUser = await collection.find({}).toArray();
    console.log("Users:", findUser);

    const countUsers = await collection.countDocuments({});
    console.log("Total users:", countUsers);

    return "Done!";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());