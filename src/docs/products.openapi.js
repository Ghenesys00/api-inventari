/**
 * @openapi
 * components:
 * schemas:
 * Product:
 * type: object
 * required:
 * - name
 * - price
 * - category
 * properties:
 * id:
 * type: string
 * description: ID autogenerat per MongoDB
 * name:
 * type: string
 * description:
 * type: string
 * price:
 * type: number
 * stock:
 * type: integer
 * default: 0
 * category:
 * type: string
 * description: ID de la categoria
 * supplier:
 * type: string
 * description: ID del proveïdor
 * * /api/v1/products:
 * get:
 * summary: Llistar tots els productes
 * tags: [Products]
 * security:
 * - bearerAuth: []
 * responses:
 * 200:
 * description: Llista de productes
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Product'
 * post:
 * summary: Crear un nou producte
 * tags: [Products]
 * security:
 * - bearerAuth: []
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Product'
 * responses:
 * 201:
 * description: Producte creat
 * * /api/v1/products/{id}:
 * get:
 * summary: Obtenir un producte per ID
 * tags: [Products]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Detalls del producte
 * put:
 * summary: Actualitzar un producte
 * tags: [Products]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Producte actualitzat
 * delete:
 * summary: Eliminar un producte
 * tags: [Products]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Producte eliminat
 */