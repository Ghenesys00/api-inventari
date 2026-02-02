import { Router } from 'express';
import * as controller from '../controllers/auth.controller.js';

const router = Router();

/**
 * @openapi
 * tags:
 *   - name: Auth
 *     description: Operacions d'autenticació
 */

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Registre d'usuari
 *     tags: [Auth]
 *     security: []   # 👈 PÚBLIC
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Creat
 */
router.post('/register', controller.register);

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     security: []   # 👈 PÚBLIC
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post('/login', controller.login);

export default router;
