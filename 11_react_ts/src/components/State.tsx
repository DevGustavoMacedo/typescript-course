import { MouseEvent, ReactElement, useState } from 'react'

const State = (): ReactElement => {
  const [text, setText] = useState<string>('Roda, roda, vira, vê se roda bem')

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setText('Mas que raio de festa que eu não encontro ninguém')
  
    return console.log(e.target) 
  } 

  return (
    <>
      <p>{text}</p>
      <button onClick={handleClick}>CLICK</button>
    </>
  ) 
}

export default State
