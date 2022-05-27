import { semaforo, diaSemana, sequenciaPar } from './services.js'
import { Router } from 'express'
const server = Router();

server.get('/semaforo/:cor' , (req, resp) => {
    try{
        const a = req.params.cor;
        const x = semaforo(a);
        resp.send({Orientação: x})
        
    } catch (err) {
        resp.send ({erro: err.message})
    }
})

server.get('/diasemana' , (req, resp) => {
    try{
        const a = Number(req.query.dia);
        const x = diaSemana(a);
        resp.send({Orientação: x})
        
    } catch (err) {
        resp.send ({erro: err.message})
    }
})

server.post('/sequenciapar' , (req, resp) =>{
    try{
        const limite = req.body.limite;
        const x = sequenciaPar(limite);
        resp.send(x)
    } catch (err) {
        resp.send ({erro: err.message})
    } 
})

export default server; 


