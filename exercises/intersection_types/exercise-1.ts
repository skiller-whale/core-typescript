export {} // empty export to ensure the compiler treats this file as a module

type Book = {
  title: string
  author: string
  isbn: number
}

type User = {
  username: string
  isAdmin: boolean
}

type Session = {
  sessionId: number
  cookie: string
}

type Review = {
  rating: number
  comments: string
}

const bookOrder = {
  title: "The Old Man and the Sea",
  author: "Ernest Herringway",
  isbn: 9787201046440,
  quantity: 12,
}

const anonymousReview = {
  title: "The Old Man and the Sea",
  author: "Ernest Herringway",
  isbn: 9787201046440,
  rating: 3.8,
  comments:
    "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses — specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.",
}

const bookplaiceReview = {
  title: "The Old Man and the Sea",
  author: "Ernest Herringway",
  isbn: 9787201046440,
  username: "bookplaice",
  rating: 3.8,
  comments:
    "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses — specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.",
}

const activeUser = {
  username: "bookplaice",
  isAdmin: false,
  sessionId: 14,
  cookie: "username=bookplaice; sessionId=14",
}
