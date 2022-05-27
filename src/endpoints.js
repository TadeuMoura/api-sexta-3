import { semaforo, diaSemana, fatorial, sequenciaPar  } from './services.js'
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



server.post('/sequenciapar', (req, resp) => {
    try{
      const n = req.body.n;

      const x = sequenciaPar (n);


      resp.send({
          sequencia: x
      })
       } catch(err) {
           resp.status(404).send({
               erro: err.message
           })
       }
  })



server.get('/fatorial' , (req, resp) => {
    
      const n = req.query.n;
      const x = fatorial (n);
      resp.send({numeros: x});
})

export default server; 


