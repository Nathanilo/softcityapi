import { Router } from 'express';
import { register, login } from '../controllers/authController.js';

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registers a new user
 *     description: Endpoint to register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
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
router.post('/register', register);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     description: Endpoint to login a user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       201:
 *         description: User login successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
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
router.post('/login', login);

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required: [email, username, password]
 *       properties:
 *         username:
 *           type: string
 *           example: nathanielodion
 *         email:
 *           type: string
 *           example: nathanielodion@gmail.com
 *         password:
 *           type: string
 *           example: super-secret-password
 *       example:
 *         email: nathanielodion@gmail.com
 *         username: nathanielodion
 *         password: super-secret-password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required: [email, password]
 *       properties:
 *         email:
 *           type: string
 *           example: nathanielodion@gmail.com
 *         password:
 *           type: string
 *           example: super-secret-password
 *       example:
 *         email: nathanielodion@gmail.com
 *         password: super-secret-password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterResponse:
 *       type: object
 *       required: [message]
 *       properties:
 *         message:
 *           type: string
 *           example: User registered successfully
 *       example:
 *         message: User registered successfully
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginResponse:
 *       type: object
 *       required: [token]
 *       properties:
 *         token:
 *           type: string
 *           example: shdjhjshjsdhjsdhdbnfbshdksfbfhjfbbfdjbdbncd
 *       example:
 *         token: shdjhjshjsdhjsdhdbnfbshdksfbfhjfbbfdjbdbncd
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
