import { Router } from 'express';
import subjectRouter from './subject.routes';
import lessonRouter from './lesson.routes';
import studentRouter from './student.routes';
import contentRouter from './content.routes';

const routes = Router();

 routes.use('/class', subjectRouter);
 routes.use('/lesson', lessonRouter);
 routes.use('/student', studentRouter);
 routes.use('/content', contentRouter);

export default routes;
