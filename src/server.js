import express from 'express';
import setupMiddware from './middleware';
import { restRouter } from './api';
import { connect } from './db';
import { signin, protect } from './api/modules/auth';
import engine from "ejs-locals";

const app = express();

setupMiddware(app);
connect();

app.use('/api', restRouter);
app.use(express.static("src"));

export default app;
