import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Subject } from '../models/Subject';
import { SubjectRepository } from '../repositories/SubjectRepository';

const subjectRouter = Router();

// POST /class - End point insere uma disciplina (subject) nova
subjectRouter.post('/', async (request, response) => {
	try {
	  let subjectRepository = getRepository(Subject);
	  const res = await subjectRepository.save(request.body);
	  return response.status(201).json(res);
	} catch (err) {
	  console.log('err.message :>> ', err.message);
	}
});

// GET /class - End point lista todas as disciplina (subject)
subjectRouter.get('/', async (request, response) => {
	let subjectRepository = getRepository(Subject);
	return response.status(200).json( await subjectRepository.find());
});

// GET /class/:name - End point lista disciplina (subject) por nome
subjectRouter.get('/:name', async (request, response) => {
	const repository = getCustomRepository(SubjectRepository);
	const res = await repository.findByName(request.params.name);
	return response.json(res);
});

export default subjectRouter;
