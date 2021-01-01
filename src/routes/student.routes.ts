import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Student } from '../models/Student';

const studentRouter = Router();

// POST /student - End point insere um student novo
studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
      console.log('err.message :>> ', err.message);
      return response.status(400).send();
  }
});

// GET /student - End point lista todos os student
studentRouter.get('/', async (request, response) => {
  let rep = getRepository(Student);
	return response.status(200).json( await rep.find());
});

export default studentRouter;