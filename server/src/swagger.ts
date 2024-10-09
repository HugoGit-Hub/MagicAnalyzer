import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Information',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerDocs: Object = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app: Application): void => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;
