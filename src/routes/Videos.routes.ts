import {Router} from 'express';
const router = Router();

import  * as videoCtrl from './Videos.controller';

router.get('/videos', videoCtrl.getVideos);

router.get('/videos/:id', videoCtrl.getVideo);

router.post('/videos', videoCtrl.createVideos);

router.delete('/videos/:id',videoCtrl.)

export default router;