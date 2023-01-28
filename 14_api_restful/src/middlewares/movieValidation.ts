import { body } from 'express-validator'

export const movieCreateValidation = () => [
  body('title')
    .isString().withMessage('Título precisa ser texto')
    .isLength({min:2}).withMessage('Título precisa ser preenchido'),
  body('rating')
    .isNumeric().withMessage('A nota precisa ser numérica')
    .custom((value:number) => {
      if(value < 0 || value > 5) throw new Error('A nota precisa ser entre 0 e 5')
      
      return true
    }),
  body('description')
    .isString().withMessage('A descrição precisa ser texto')
    .isLength({min: 5}).withMessage('Descrição obrigatória'),
  body('director')
    .isString().withMessage('Precisa ser texto')
    .isLength({min: 2}).withMessage('Diretor não preenchido'),
  body('poster')
    .isURL().withMessage('Precisa ser url')
    .isLength({min: 10}).withMessage('Preencher'),
]
