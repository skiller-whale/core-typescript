type Preview = () => string

// declare the Previewable interface here

function printPreview(message: any) {
  console.log(`Preview for ${message.label}:`)
  console.log(message.preview())
}

const message1 = {
  label: "question",
  body: "shall we go for lunch?",
  preview() {
    return this.body.toUpperCase()
  },
}

const message2 = {
  label: "reply",
  body: "why are you shouting?",
  preview() {
    return `** ${this.body} **`
  },
}

printPreview(message1)
printPreview(message2)
