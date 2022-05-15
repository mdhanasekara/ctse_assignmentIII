import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addStock } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    itemCode: '',
    itemName: '',
    price: '',
    totQty: '',
    issuedQty:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddStock = () => {
    const [stock, setStock] = useState(initialValue);
    const { itemName, price, totQty, issuedQty } = stock;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setStock({...stock, [e.target.name]: e.target.value})
    }

    const addStockDetails = async() => {
        await addStock(stock);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Stock</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Item Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='itemName' value={itemName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Total Qty</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='totQty' value={totQty} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">issued Qty</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='issuedQty' value={issuedQty} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addStockDetails()}>Add Stock</Button>
            </FormControl>
        </Container>
    )
}

export default AddStock;