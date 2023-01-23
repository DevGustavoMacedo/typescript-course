import Animals from './animals'

class Dogs implements Animals {
  name
  noise

  constructor(name: string, noise: string) {
    this.name = name
    this.noise = noise
  }
  
  makeNoise(): string {
    return 'Dogs noise is ' + this.noise  
  }
}

const dog = new Dogs('Bob', 'woof')

export default dog