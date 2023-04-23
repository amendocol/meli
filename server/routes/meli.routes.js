import express from 'express';
import axios from 'axios';

const meliRoutes = express.Router();
const author = { name: "Arnulfo", lastname: "Mendoza Huertas", from: "Colombia", to:"Meli-Front" };
meliRoutes.route('/items').get(async (req,res)=>{
    try {
        const location = (req.query.region || 'LA');
        const r =  await axios.get(`https://api.mercadolibre.com/sites/M${location}/search?q=${req.query.search}&&limit=4`).then((d)=>{
            d.data.author = author;
            res.status(200).json(d.data);
        });
    } catch (error) {
        console.error(error);
        res.status(200).json(false);
    }
})
meliRoutes.route('/item').get(async (req,res)=>{
    try {
        const r =  await axios.get(`https://api.mercadolibre.com/items/${req.query.id}`).then((d)=>{
        d.data.author = author;
        res.status(200).json(d.data);
        });
    } catch (error) {
        console.error(error);
        res.status(200).json(false);
    }
})
meliRoutes.route('/breadcrumb').get(async (req,res)=>{
    try {
        const r =  await axios.get(`https://api.mercadolibre.com/categories/${req.query.id}`).then((d)=>{
        d.data.author = author;
        res.status(200).json(d.data);
        });
    } catch (error) {
        console.error(error);
        res.status(200).json(false);
    }
})
export default meliRoutes;