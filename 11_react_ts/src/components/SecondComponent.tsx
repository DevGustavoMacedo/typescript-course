import { ReactElement, useContext } from 'react'
import { AppContext } from '../App'

// ContextAPI é uma forma de transitar dados/proprieades por componentes ou páginas. Em muitos casos é melhor do que fazer isso por props

const SecondComponent = (): ReactElement => {
  const thomas = useContext(AppContext)

  return (
    <>
      {thomas && (
        <>
          <p>{thomas.greeting}</p>
          <p>É um cantor {thomas.nationality}</p>
          {thomas.isSinger && <p>Ele debutou há {thomas.carrerYears} anos</p>}
        </>
      )}
    </>
  )
}

export default SecondComponent
