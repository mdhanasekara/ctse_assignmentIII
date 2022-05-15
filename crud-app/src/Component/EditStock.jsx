import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getStock, editStock } from '../Service/api';

const initialValue = {
    itemName: '',
    price: '',
    totQty: '',
    issuedQty: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditStock = () => {
    const [stocks, setstocks] = useState(initialValue);
    const { itemName, price, totQty, issuedQty } = stocks;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadStockDetails();
    }, []);

    const loadStockDetails = async() => {
        const response = await getStock(id);
        setstocks(response.data);
    }

    const editStockDetails = async() => {
        const response = await editStock(id, stocks);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setstocks({...stocks, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='itemName' value={itemName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">total Qty</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='totQty' value={totQty} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">issued Qty</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='issuedQty' value={issuedQty} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editStockDetails()}>Edit Stock</Button>
            </FormControl>
        </Container>
    )
}

export default EditStock;