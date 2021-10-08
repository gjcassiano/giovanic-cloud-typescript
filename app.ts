import express from 'express';
import * as http from 'http';
import cors from 'cors';
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';
import { Utils } from './users/utils/utils';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 8080;
const routes: Array<CommonRoutesConfig> = [];


app.use(function (req, res, next) {
    Utils.printUsedMemory();
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

routes.push(new UsersRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${port}`);
});



server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });

    Utils.printUsedMemory();

});
