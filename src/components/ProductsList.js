// src/components/ProductsList.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../Api';
import { Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts('AMZ', 'Laptop', 10, 1, 10000); // Example fetch
                setProducts(productsData);
                setFilteredProducts(productsData); // Initialize filteredProducts with all products
            } catch (error) {
                setError('Error fetching products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Typography variant="body1" color="error">{error}</Typography>;

    return (
        <Grid container spacing={2}>
            {filteredProducts.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{product.name}</Typography>
                            <Typography>Company: {product.company}</Typography>
                            <Typography>Price: ${product.price}</Typography>
                            <Typography>Rating: {product.rating}</Typography>
                            <Typography>Discount: {product.discount}%</Typography>
                            <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsList;
