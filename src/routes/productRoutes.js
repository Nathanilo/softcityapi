import express from 'express';
import {
  createProduct,
} from '../controllers/productController.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/products/:
 *   post:
 *     summary: Creates a new product
 *     description: Endpoint to create a new product
 *     tags:
 *       - Product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProductRequest'
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateProductResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', authMiddleware, createProduct);

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateProductRequest:
 *       type: object
 *       required: [name, description, price, imageUrl]
 *       properties:
 *         name:
 *           type: string
 *           example: Air Jordan
 *         description:
 *           type: string
 *           example: Nice kicks for basketballers
 *         price:
 *           type: number
 *           example: 199
 *         imageUrl:
 *            type: string
 *            example: https://www.valid-image-link.com
 *       example:
 *         name: Air Jordan
 *         description: Nice kicks for basketballers
 *         price: 199
 *         imageUrl: https://www.valid-image-link.com
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateProductResponse:
 *       type: object
 *       required: [name, description, price, imageUrl]
 *       properties:
 *         name:
 *           type: string
 *           example: Air Jordan
 *         description:
 *           type: string
 *           example: Nice kicks for basketballers
 *         price:
 *           type: number
 *           example: 199
 *         imageUrl:
 *            type: string
 *            example: https://www.valid-image-link.com
 *         _id:
 *           type: string
 *           example: afebcde69fedcdfecfdec
 *         __v:
 *            type: number
 *            example: 0
 *       example:
 *         name: Air Jordan
 *         description: Nice kicks for basketballers
 *         price: 199
 *         imageUrl: https://www.valid-image-link.com
 *         _id: afebcde69fedcdfecfdec
 *         __v: 0
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       required: [message]
 *       properties:
 *         message:
 *           type: string
 *           example: Some error message
 *       example:
 *         message: Some error message
 */

export default router;