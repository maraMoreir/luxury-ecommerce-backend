import express from 'express';
import Produto from '../models/productModel.js'

const productRouter = express.Router();


productRouter.get('/', async (req, res) => {
    const products = await Produto.find();
    res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
    const product = await Produto.findOne({ slug: req.params.slug });
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Produto não encontrado' });
    }
});

export default productRouter;