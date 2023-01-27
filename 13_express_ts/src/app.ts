// iniciando o express
import e from 'express'
import express, { NextFunction, Request, Response } from 'express'

const app = express()

const port = process.env.PORT || '8080'

app.listen(port, () => console.log(`Listening on port ${port}`))

// habilitando o express é trabalhar com json
app.use(express.json())



// middleware pra todas rotas da aplicação (tem que ser declarado antes das rotas)
const showPath = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.path)
  next()
}

app.use(showPath)



// rotas

// tipando o express você tem acesso a sugestões
app.get('/', (req: Request, res: Response) => {
  // return req.send('HOME')    o TS avisa que vai dar erro
  return res.send('HOME')
})

app.post('/api/products', (req: Request, res: Response) => {
  console.log(req.body)

  return res.send('Product added')
})



// all - rota que aceita vários verbos (quando o endpoint precisa realizar várias funções)
app.all('/api/products/check', (req: Request, res: Response) => {
  if (req.method === 'POST') {
    return res.send('Adicionando registro')
  } else if (req.method === 'GET') {
    return res.send('Lendo registro')
  } else {
    return res.send('Operação não permitida')
  }
})



// enviando json
app.get('/api/shoes', (req: Request, res: Response) => res.json({ name: 'Jordan1', price: 999.99 }))



// router parameter
app.get('/api/shoes/:name', (req: Request, res: Response) => {
  const shoe: {
    name: string
    price: number
  } = { name: 'Jordan2', price: 999.99 }

  if(req.params.name === 'Jordan2') {
    return res.json(shoe)
  } else {
    return res.send('Produto não encontrado')
  }
})



// multiple parameters e router handler
const getFilmsReviews = (req: Request, res: Response) => {
  const films = [
    { id: "157", name: 'The Simpsons' },
    { id: "233", name: 'The Godfather' }
  ]

  const reviews =  [
    { id: "43", review: 4.5, filmId: '233' },
    { id: "56", review: 4.5, filmId: '233' },
    { id: "12", review: 2.5, filmId: '157' },
  ]

  const film = films.find(item => item.id === req.params.filmId)
  const review = reviews.find(item => item.id === req.params.reviewId && item.filmId === req.params.filmId)

  if(!film) {
    return res.send('Filme não encontrado')
  } else if(!review) {
    return res.send('Review não encontrada')
  }
  else if(film) {
    return res.send(`A nota no filme ${film.name} foi ${review.review}`)
  }
}


app.get('/api/films/:filmId/reviews/:reviewId', getFilmsReviews)



// middleware (uma função para executar entre uma rota)
const checkLevel = (req: Request<{ lv: string }>, res: Response<{ message: string }>, next: NextFunction) => {
  if(req.params.lv === '1') {
    next()
  } else {
    res.send({ message: 'Get out conman!' })
  }
}

// Generics
app.get(
  '/api/users/:name/:lv',
  checkLevel,
  (
    req: Request,
    res: Response<{ name: string, message: string }>
  ) => res.send({ name: req.params.name, message: 'Welcome comrade' }))



// tratando erros
app.get('/api/errors', (req: Request, res: Response) => {
  try {
    // lógica

    throw new Error('Algo deu errado')
  } catch (error: any) {
    res.status(500).json({ msg: error.message })
  }
})
