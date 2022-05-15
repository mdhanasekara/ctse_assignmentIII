import express from 'express';
import { getStock, addStock, getStockById, editStock, deleteStock } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getStock);
router.post('/add', addStock);
router.get('/:id', getStockById);
router.put('/:id', editStock);
router.delete('/:id', deleteStock);

export default router;