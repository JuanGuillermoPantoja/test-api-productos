const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

// create product
router.post('/products', (req, res) => {
    const product = productSchema(req.body);
    product
    .save()
    .then((data) => res.json(data), res.sendStatus(200))
    .catch((error) => res.json({ message: error }));
})

// get products
router.get('/products', (req, res) => {
    productSchema
    .find()
    .then((data) => res.json(data), res.status(200))
    .catch((error) => res.json({ message: error }));
});

// get a product
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//update a product
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name,stock,price } = req.body;
    productSchema
    .updateOne({_id: id}, { $set: {name,stock,price} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a product
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;