import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const stockSchema = mongoose.Schema({
        itemName:String,
        price:String,
        totQty:String,
        issuedQty:String,
});

autoIncrement.initialize(mongoose.connection);
stockSchema.plugin(autoIncrement.plugin, 'stock');
const Stock = mongoose.model('stock', stockSchema);

export default Stock;