import Animals from './animals'

class Cats implements Animals {
  name
  noise

  constructor(name: string, noise: string) {
    this.name = name
    this.noise = noise
  }
  
  makeNoise(): string {
    return 'Cats noise is ' + this.noise  
  }
}

export default Cats