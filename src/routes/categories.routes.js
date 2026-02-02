import express from 'express';
import { list, create } from '../controllers/categories.controller.js';
const router = express.Router();

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Llista de categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: Llista exitosa
 */
router.get('/', list);

/**
 * @swagger
 * /api/v1/categories:
 *   post:
 *     summary: Crea una categoria
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria creada
 */
router.post('/', create);

export default router;
