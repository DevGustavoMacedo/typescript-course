import { Request, Response } from 'express'
import { MovieModel } from '../model/Movies'
import Logger from '../../config/logger'
import { Types } from 'mongoose'

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)

    return res.status(201).json(movie)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res.status(500).json({ error: "Tente novamente mais tarde"})
  }
}

export const findOneMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    
    if(!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Filme não encontrado'} )
    }
    
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado'} )
    }

    return res.status(200).json(movie)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res.status(500).json({ error: "Tente novamente mais tarde"})
  }
}

export const findAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find()

    if (!movies) {
      return res.status(404).json({ error: 'Nenhum filme cadastrado'} )
    }

    return res.status(200).json(movies)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res.status(500).json({ error: "Tente novamente mais tarde"})
  }
}

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    
    if(!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Filme não encontrado'} )
    }
    
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado'} )
    }

    await movie.delete()

    return res.status(200).json({ msg: `Filme ${movie.title} deletado`})
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res.status(500).json({ error: "Tente novamente mais tarde"})
  }
}

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    
    if(!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Filme não encontrado'} )
    }
    
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado'} )
    }

    const data = req.body

    await MovieModel.updateOne({ _id: id }, data)

    return res.status(200).json({ msg: `Filme ${movie.title} atualizado`, data})
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res.status(500).json({ error: "Tente novamente mais tarde"})
  }
}