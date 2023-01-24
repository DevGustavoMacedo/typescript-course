// class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

// method decorator
function checkUserLiked() {
  return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value

    descriptor.value = function(...args: any[]) {

      if(args[0] === true) {
        console.log('You already liked')
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }
  }
}

// property decorator
function maxChars(limit: number) {
  return function(target: Object, propertyKey: string) {
    
    let value: string

    const getter = () => value

    const setter = (newValue: string) => {

      if(newValue.length > limit) {
        console.log(`O post deve ter no máximo ${limit} caracteres`)
        return
      } else {
        value = newValue
        console.log('Post feito')
      }
    } 

    Object.defineProperty(target, propertyKey, { get: getter, set: setter })
  } 
}

@createdDate
class Posts {
  @maxChars(20)
  post
  createdAt?: Date
  liked = false

  constructor(post: string) {
    this.post = post
  }

  @checkUserLiked()
  like(alreadyLiked: boolean) {
    this.liked = true
    console.log('User liked')
  }
}

const post1 = new Posts('Algum post')
post1.like(post1.liked)
post1.like(post1.liked)
console.log(post1)



const post2 = new Posts('Outro post')
console.log(post2)

const post3 = new Posts('Post muito longoooooooooo')

console.log('*****************************************')