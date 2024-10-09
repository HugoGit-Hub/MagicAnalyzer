import express, {Express, Request, Response} from 'express';
import setupSwagger from './swagger';
import deckRoute from "./routes/exampleRoute";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

setupSwagger(app);

app.use('/', deckRoute);

app.listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}`);
});