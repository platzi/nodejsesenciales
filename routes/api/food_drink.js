const API_PATH="/api"
const FandD= require("../../resources/food_drink")
module.exports= (app) => {
    app.get(`${API_PATH}/food_drink`,(req,res)=>{
        res.json(FandD)
    })
}