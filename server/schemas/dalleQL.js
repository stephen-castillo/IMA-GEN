import express from 'express';
import dotevn from 'dotenv';
import {Confirguration, OpenAIApi } from 'openai';

dotevn.config();

const router = express.Router();