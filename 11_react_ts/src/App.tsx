import { createContext } from 'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import State from './components/State'

export enum Nationality {
  PT = 'português',
  BR = 'brasileiro',
  EN = 'americano',
}

type data = string | number

interface IAppContext {
  greeting: string
  nationality: Nationality
  carrerYears: number
  isSinger: boolean
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  const greeting = (name: string) => `Olá, ${name}!`

  const name: string = 'Tomás Ferraz'
  const isSinger: boolean = true

  const debut: data = '2014'

  const carrerYears = (debut: data): number => {
    const currentYear = new Date()

    return typeof debut === 'string'
      ? currentYear.getFullYear() - Number(debut)
      : currentYear.getFullYear() - debut
  }

  // o próprio context tipa por sozinho por causa do Generic com a interface
  const thomas = {
    isSinger,
    nationality: Nationality.PT,
    carrerYears: carrerYears(debut),
    greeting: greeting(name),
  }

  return (
    <AppContext.Provider value={thomas}>
        <h2>ReactJS com TypeScript</h2>
        <SecondComponent />
        <FirstComponent />
        <State />
    </AppContext.Provider>
  )
}

export default App
