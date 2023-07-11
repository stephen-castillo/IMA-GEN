import express from 'express';
import dotevn from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import Post from '../models/post.js';

dotevn.config();

const router = express.Router();