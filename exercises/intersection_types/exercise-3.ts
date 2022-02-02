export default {} // empty export to ensure the compiler treats this file as a module

// ------------------------------------------------------------------------- //
// Don't modify these types                                                  //
// ------------------------------------------------------------------------- //
type Book = {
  title: string,
  author: string,
  genre: 'Fantasy' | 'Romance' | 'Dystopian' | 'Contemporary'
}

type Film = {
  title: string,
  director: string,
  genre: 'Action' | 'Comedy' | 'Fantasy'  | 'Romance'
  rating: 'U' | 'PG' | 12 | 16 | 18
}

type Review = {
  rating: 1 | 2 | 3 | 4 | 5,
  comments: string
}

type BookSeries = {
  title: string,
  entries: Book[]
}

type FilmSeries = {
  title: string,
  entries: Film[]
}

// ------------------------------------------------------------------------- //
// You can use these values in your answers (if you want)                    //
// ------------------------------------------------------------------------- //
const seriesTitle = 'Herring Potter'

const book: Book = {
  title: 'Herring Potter and the Philosopher\'s Stone',
  author: 'J K Rowling',
  genre: 'Fantasy'
}

const film: Film = {
  title: 'Herring Potter and the Philosopher\'s Stone',
  director: 'Chris Columbus',
  genre: 'Fantasy',
  rating: 'PG'
}

// ------------------------------------------------------------------------- //
// Uncomment and complete the code below...                                  //
// ------------------------------------------------------------------------- //

// const bookReview: Book & Review = {}

// const filmReview: Film & Review = {}

// const adaptation: Book & Film = {}

// const bookAndFilmSeries: BookSeries & FilmSeries = {}
