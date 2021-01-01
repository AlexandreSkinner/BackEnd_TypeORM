import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Content } from '../models/Content';

const contentRouter = Router();

// POST /content - End point insere um content novo
contentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Content);
    const res = await repo.save(request.body);
    return response.status(201).json(res);   
  } catch (err) {
      console.log('err.message :>> ', err.message);
      return response.status(400).send();
  }
});

// GET /content - End point lista todas as content
contentRouter.get('/', async (request, response) => {
  let repo = getRepository(Content);
  return response.json(await repo.find());
});

export default contentRouter;
