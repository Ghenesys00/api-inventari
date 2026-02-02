/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id: { type: string }
 *         name: { type: string, minLength: 2 }
 *         sku: { type: string, pattern: '^[A-Z0-9-]+$' }
 *         price: { type: number, minimum: 0 }
 *         stock: { type: integer, minimum: 0 }
 *         active: { type: boolean }
 *       required: [id, name, price, stock]
 *     ProductCreate:
 *       type: object
 *       properties:
 *         name: { type: string, minLength: 2 }
 *         sku: { type: string, pattern: '^[A-Z0-9-]+$' }
 *         price: { type: number, minimum: 0 }
 *         stock: { type: integer, minimum: 0 }
 *         active: { type: boolean }
 *       required: [name, price, stock]
 *     ProductUpdate:
 *       type: object
 *       properties:
 *         name: { type: string, minLength: 2 }
 *         sku: { type: string, pattern: '^[A-Z0-9-]+$' }
 *         price: { type: number, minimum: 0 }
 *         stock: { type: integer, minimum: 0 }
 *         active: { type: boolean }
 *     Error:
 *       type: object
 *       properties:
 *         error: { type: string }
 *         errors:
 *           type: array
 *           items: { type: object }
 */
