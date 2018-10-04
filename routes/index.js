const glob = require("glob");
const path = require("path");

module.exports = function(app){
  glob.sync("./routes/**/*.js", { ignore: "./routes/**/index.js" }).forEach((file)=>{
    require(path.resolve(file))(app);
  })
}