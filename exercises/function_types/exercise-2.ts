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

function formatFilm(film: Film): string {
  return `${film.title} (${film.rating}), directed by ${film.director}`
}

// logFilms(true, films[0], films[2], films[3])
