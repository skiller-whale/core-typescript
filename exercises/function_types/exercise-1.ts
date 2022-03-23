export default {} // empty export to ensure the compiler treats this file as a module

type Film = {
  title: string
  director: string
  rating: 'U' | 'PG' | 12 | 15 | 18
}

const films: Film[] = [
  { title: 'Finding Nemo', director: 'Andrew Sturgeon', rating: 'U' },
  { title: 'Barracuda', director: 'Harry Kerwin', rating: 15 },
  { title: 'Big Fish', director: 'Tim Burton', rating: 'PG' },
  { title: 'A Fish Called Wanda', director: 'Charles Crichton', rating: 18 }
]

// determine first film alphabetically
let firstFilmAlphabetically = films[0]
for (let i = 0; i < films.length; i += 1) {
  if (films[i].title < firstFilmAlphabetically.title) {
    firstFilmAlphabetically = films[i]
  }
}

// get all films by Tim Burton
const filmsByTimBurton: Film[] = []
for (let i = 0; i < films.length; i += 1) {
  if (films[i].director === 'Tim Burton') {
    filmsByTimBurton.push(films[i])
  }
}

// log the information
console.log('First film alphabetically:', `${firstFilmAlphabetically.title} (${firstFilmAlphabetically.rating}), directed by ${firstFilmAlphabetically.director}`)
console.log('Films by Tim Burton:')
for (let i = 0; i < filmsByTimBurton.length; i += 1) {
  console.log(`${films[i].title} (${films[i].rating}), directed by ${films[i].director}`)
}
