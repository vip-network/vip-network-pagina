const express = require('express');
const router = express.Router();
const db = require('../database')

router.get('/', async (req, res) => {
    try {
        const list_limpieza = await db.query("SELECT *FROM productos where id_categoria = 9");
        res.render('limpieza/limpieza',{list_limpieza});
    } catch (e) {
        console.log(e)
    }    
});

router.get('/detalle_limpieza/:id', async (req, res) => {
    const { id } = req.params;    
    try {
        const idProducto = await db.query("SELECT id, nombre, descripcion, FORMAT(precio, '#,###') as precio, stock FROM productos WHERE id = '" + id + "'")
        res.render('limpieza/detalle_limpieza', {idProducto: idProducto.recordset[0]});
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;