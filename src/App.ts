import express from 'express';
import config from './config';

const app= express();

export default app;

app.set('port', config.PORT)