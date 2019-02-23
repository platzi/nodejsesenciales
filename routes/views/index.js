const glob = require("glob");
const path = require("path");

module.exports = function(app){
  glob.sync("./routes/**/*.js").forEach((file)=>{
    console.log(file)
    if (!file.includes("index.js")) {
      require(path.resolve(file))(app);
    }
  })
}