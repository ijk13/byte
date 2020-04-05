  
let mongoose  = require("./config");
mongoose = mongoose.mongoose
const nstoreSchema = new mongoose.Schema({brand: String, product:String,price:String,unit:String,productImage:Array});
const nstore = mongoose.model('store', nstoreSchema);
module.exports.nstore = nstore;