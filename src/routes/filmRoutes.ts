import { Router } from 'express';
import { filmController } from '../controllers/filmController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Film:
 *       type: object
 *       required:
 *         - title
 *         - original_title
 *         - description
 *         - director
 *         - release_date
 *         - running_time
 *         - rt_score
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated MongoDB ID
 *         title:
 *           type: string
 *           description: English title of the film
 *         original_title:
 *           type: string
 *           description: Original Japanese title
 *         description:
 *           type: string
 *           description: Film description
 *         director:
 *           type: string
 *           description: Film director
 *         release_date:
 *           type: string
 *           description: Release year
 *         running_time:
 *           type: string
 *           description: Running time in minutes
 *         rt_score:
 *           type: string
 *           description: Rotten Tomatoes score
 */

/**
 * @swagger
 * /api/films:
 *   get:
 *     summary: Get all films
 *     tags: [Films]
 *     responses:
 *       200:
 *         description: List of all films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Film'
 */
router.get('/', filmController.getAllFilms);

/**
 * @swagger
 * /api/films/{id}:
 *   get:
 *     summary: Get film by ID
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Film ID
 *     responses:
 *       200:
 *         description: Film details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *       404:
 *         description: Film not found
 */
router.get('/:id', filmController.getFilmById);

/**
 * @swagger
 * /api/films:
 *   post:
 *     summary: Create a new film
 *     tags: [Films]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *     responses:
 *       201:
 *         description: Film created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', filmController.createFilm);

/**
 * @swagger
 * /api/films/{id}:
 *   put:
 *     summary: Update a film
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Film ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *     responses:
 *       200:
 *         description: Film updated successfully
 *       404:
 *         description: Film not found
 */
router.put('/:id', filmController.updateFilm);

/**
 * @swagger
 * /api/films/{id}:
 *   delete:
 *     summary: Delete a film
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Film ID
 *     responses:
 *       204:
 *         description: Film deleted successfully
 *       404:
 *         description: Film not found
 */
router.delete('/:id', filmController.deleteFilm);

export default router;