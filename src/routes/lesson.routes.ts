import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Lesson } from '../models/Lesson';

const lessonRouter = Router();

// POST /lesson - End point insere uma lesson nova
lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
      console.log('err.message :>> ', err.message);
      return response.status(400).send();
  }
});

// GET /lesson - End point lista todas as lessons
lessonRouter.get('/', async (request, response) => {
  const rep = getRepository(Lesson);
  return response.status(200).json( await rep.find());
});

export default lessonRouter;