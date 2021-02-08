import {RequestHandler} from 'express';
import Video from './Video';

export const createVideos: RequestHandler = async (req, res)=> {
   
    const videoFound = await Video.findOne({url: req.body.url})
    if (videoFound)
    return res.status(301).json({message: 'The URL already exist'});

    const video = new Video(req.body)
    const savedVideo = await video.save();
    console.log(savedVideo)
    res.json('video saved')
   }

export const getVideos: RequestHandler = (req, res)=> {
     res.json('getting videos')
    }

export const getVideo: RequestHandler = (req, res)=> {
     res.json('getting a video')
    }

export const deleteVideo: RequestHandler = (req, res)=> {
     res.json('deletting videos')
    }
export const updateVideo: RequestHandler = (req, res)=> {
    res.json('updating a video')
    }
   


    