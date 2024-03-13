import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://keerthanapenugonda9:Dharshan@cluster0.be74zcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("crudapp");
    cb();
}

export {db,connectToDB};

