import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getStock, deleteStock } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllStock = () => {
    const [stocks, setStock] = useState([]);
    
    useEffect(() => {
        getAllStock();
    }, []);

    const deleteStockData = async (id) => {
        await deleteStock(id);
        getAllStock();
    }

    const getAllStock = async () => {
        let response = await getStock();
        setStock(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>itemCode</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>price</TableCell>
                    <TableCell>total qty</TableCell>
                    <TableCell>issued Qty</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {stocks.map((stock) => (
                    <TRow key={stock.id}>
                        <TableCell>{stock._id}</TableCell> 
                        <TableCell>{stock.itemName}</TableCell>
                        <TableCell>{stock.price}</TableCell>
                        <TableCell>{stock.totQty}</TableCell>
                        <TableCell>{stock.issuedQty}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${stock._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteStockData(stock._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllStock;