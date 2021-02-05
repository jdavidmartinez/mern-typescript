import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';

import  videoRoutes from './routes/Videos.routes' ;

const app= express();

app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(videoRoutes);

export default app;

app.set('port', config.PORT)