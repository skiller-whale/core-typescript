export default {} // empty export to ensure the compiler treats this file as a module

type BookReview = {
  title: string,
  author: string,
  isbn: number,
  rating: number,
  comments: string
}

type AlbumReview = {
  title: string,
  artist: string,
  rating: number,
  comments: string
}

type Review = BookReview | AlbumReview

function getHighestRating (reviews: Review[]): number {
  let highestRating = 0
  for (const review of reviews) {
    if (review.rating > highestRating) {
      highestRating = review.rating
    }
  }
  return highestRating
}

function reviewToHTML (review: Review): string {
  return `
    <h2>${review.title}</h2>
    <p>Rating: ${review.rating}</p>
    <p>${review.comments}</p>
  `
}
