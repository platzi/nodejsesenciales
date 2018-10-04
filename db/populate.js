const mongo = require("./connect");
const argv = require('yargs').argv;
const collection = 'films';
const data = require(`../resources/${collection}`);

if (argv.fill) {
    mongo.connect()
        .then(db=>{
            db.collection(collection).insertMany(data, (err, result)=>{
                if (err) throw err;
                console.log("Los datos han sido insertados satisfactoriamente!");
                mongo.disconnect();
            });
        })
    return;
}

if (argv.clear) {
    mongo.connect()
        .then(db=>{
            db.collection(collection).drop((err, result)=>{
                if (err) throw err;
                console.log("La colección se ha descartado satisfactoriamente!");
                mongo.disconnect();
            });
        })
    return;
}