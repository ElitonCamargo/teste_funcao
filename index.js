import express from 'express';
import dados from './dados.js';
import * as funcao from './funcao.js';

const app = express();

app.get('/',(req,res)=>{
    res.json(funcao.estruturarProjeto(dados));
})
app.get('/testeResult',(req,res)=>{
    let result = funcao.estruturarProjeto(dados);
    //Exemplo de filtro de consulta avançado
    let filtroConsulta = {
        materia_prima:[{"id": 96,"percentual": [30,40]},{"id": 111,"percentual": [20,50]}], // um ou vários filtros
        nutriente:[{"id": 5,"percentual": [13.5,55]},{"id": 4, "percentual": [10,20]}] // um ou vários filtros
    }
    res.json(funcao.filtroAvancado(result,filtroConsulta));
})

const PORT = 3030; 
app.listen(PORT,()=>{
    console.log('Sistema inicializado: ', `Acesso: http://localhost:${PORT}`);
});