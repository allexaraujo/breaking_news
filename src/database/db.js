const moongose = require('mongoose')
const uri ="mongodb://bn-root:bn-root123@ac-c6mmmvh-shard-00-00.ac8pet8.mongodb.net:27017,ac-c6mmmvh-shard-00-01.ac8pet8.mongodb.net:27017,ac-c6mmmvh-shard-00-02.ac8pet8.mongodb.net:27017/?ssl=true&replicaSet=atlas-zawey0-shard-0&authSource=admin&retryWrites=true&w=majority";


const connectDatabase = () => {
    console.log('Wait connecting to the database')

    moongose.connect(uri)
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
}

module.exports = connectDatabase;