import { Router } from 'express'
import { createMovie, findOneMovie, findAllMovies, deleteMovie, updateMovie } from './controller/movie'
import { validate } from './middlewares/handleValidation'
import { movieCreateValidation } from './middlewares/movieValidation'

const router = Router()

export default router
  .post('/movie/add', movieCreateValidation() , validate , createMovie)
            // middleware de validação (apenas pra rota necessária)
  .get('/movie/:id', findOneMovie)
  .get('/movie', findAllMovies)
  .delete('/movie/:id', deleteMovie)
  .patch('/movie/:id', movieCreateValidation(), validate, updateMovie)