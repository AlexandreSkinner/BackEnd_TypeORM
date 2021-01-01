import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Class } from '../models/Class';
import { ClassRepository } from '../repositories/ClassRepository';

const classRouter = Router();

// POST /class - End point insere uma classe nova
classRouter.post('/', async (request, response) => {
	try {
	  let classRepository = getRepository(Class);
	  const res = await classRepository.save(request.body);
	  return response.status(201).json(res);
	} catch (err) {
	  console.log('err.message :>> ', err.message);
	}
});

// GET /class - End point lista todas as classes
classRouter.get('/', async (request, response) => {
	let classRepository = getRepository(Class);
	return response.status(200).json( await classRepository.find());
});

// GET /class/:name - End point lista classe por nome
classRouter.get('/:name', async (request, response) => {
	const repository = getCustomRepository(ClassRepository);
	const res = await repository.findByName(request.params.name);
	response.json(res);
});

export default classRouter;
