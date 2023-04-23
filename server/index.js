import express from "express";
import cors from 'express';
import meliRoutes from './routes/meli.routes.js'

const app = express();
app.use(cors());
app.use(express.json({limit:"50MB"}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
app.use('/api', meliRoutes);
app.get('*', (req, res)=>{
    res.redirect('http://localhost:5173');
})
app.listen(8080, ()=> console.log('Server started'));