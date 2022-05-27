import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import endpoints from './endpoints.js'

const server = express();
server.use(cors());

 server.listen(process.env.PORT, 
    () => console.log(`API online na porta ${process.env.PORT}`));

    server.use(endpoints);

