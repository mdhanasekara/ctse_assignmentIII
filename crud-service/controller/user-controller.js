 import Stock from "../model/stock.js";

// Get all stock
export const getStock = async (request, response) => {
    try{
        const stock = await Stock.find();
        response.status(200).json(stock);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the stock in database
export const addStock = async (request, response) => {
    const stock = request.body;
    
    const newStock = new Stock(stock);
    try{
        await newStock.save();
        response.status(201).json(newStock);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a stock by id
export const getStockById = async (request, response) => {
    try{
        const stock = await Stock.findById(request.params.id);
        response.status(200).json(stock);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited stock in the database
export const editStock = async (request, response) => {
    let stock = request.body;

    const editStock = new Stock(stock);
    try{
        await Stock.updateOne({_id: request.params.id}, editStock);
        response.status(201).json(editStock);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of stock from the database
export const deleteStock = async (request, response) => {
    try{
        await Stock.deleteOne({_id: request.params.id});
        response.status(201).json("Stock deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}