import React from 'react'
import "./products.scss"
import { DataGrid } from '@mui/x-data-grid';
import { topDeals } from "../../data";

const Products = () => {
    const gridRows = [
        {
            field: 'image',
            headerName: 'Image',
            width: 130,
            renderCell: (params) => (
                <img src={params.row.Image} alt={params.row.name} style={{ width: '60px', height: '60px' ,borderRadius:'50%'}} />
            ),
        },
        { field: 'Name', headerName: 'Name', width: 350, id: 1 },
        { field: 'Mail', headerName: 'Mail', width: 350, id: 2 },
        { field: 'Price', headerName: 'Price', width: 350, id: 4 },
    ]
    return (
        <div className='products'>
            <h1>Top Selling Products</h1>
            <DataGrid columns={gridRows} rows={topDeals} getRowHeight={()=>100}  />
        </div>
    )
}

export default Products