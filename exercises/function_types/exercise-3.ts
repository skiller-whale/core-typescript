export {} // empty export to ensure the compiler treats this file as a module

type Film = {
  title: string
  director: string
  rating: "U" | "PG" | 12 | 15 | 18
}

const films: Film[] = [
  { title: "Finding Nemo", director: "Andrew Sturgeon", rating: "U" },
  { title: "Barracuda", director: "Harry Kerwin", rating: 15 },
  { title: "Big Fish", director: "Tim Burton", rating: "PG" },
  { title: "A Fish Called Wanda", director: "Charles Crichton", rating: 18 },
]

function formatFilm1(film: Film, index?: number) {
  const text = `${film.title} (${film.rating}), directed by ${film.director}`
  return index !== undefined ? `${index}. ${text}` : text
}

function formatFilm2(film: Film, index?: number): string {
  const text = `${film.title} (${film.director}), rated ${film.rating}`
  return index !== undefined ? `${index}. ${text}` : text
}

function logFilms(showIndex: boolean, ...films: Film[]): void {
  for (let i = 0; i < films.length; i += 1) {
    const log = showIndex ? formatFilm1(films[i], i) : formatFilm1(films[i])
    console.log(log)
  }
}

// logFilms(formatFilm2, false, films[0], films[2], films[3])
