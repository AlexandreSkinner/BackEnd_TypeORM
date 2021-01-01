import app from './app';
import 'reflect-metadata';
import './database';

app.listen(3000, () =>{
    console.log('🏃 Server rodando em http://localhost:3000 ...');
});