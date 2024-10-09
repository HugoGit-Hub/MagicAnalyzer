import { Router, Request, Response } from 'express';

const router: Router = Router();

/**
 * @swagger
 * tags:
 *   - Example
 * /example:
 *   get:
 *     summary: Exemple d'endpoint
 *     description: Renvoie un exemple de réponse
 *     tags: [Example]
 *     responses:
 *       200:
 *         description: Réponse réussie
 */
router.get('/example', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

export default router;