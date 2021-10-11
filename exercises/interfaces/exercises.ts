//
// 1. Defining an interface
//

type Preview = () => string

// TODO: Define the Preview interface here

function printPreview(message: any) {
  console.log(`Preview for ${message.label} ==> ${message.preview()}`)
}

const example1 = {
  label: "Example 1",
  preview: function() { return this.label.toUpperCase() },
}

const example2 = {
  label: "Example 2",
  preview: function() { return `** ${this.label} **` },
}

printPreview(example1)
printPreview(example2)



//
// 3. Implementing an interface
//

// The Email class is for exercise 3
class Email {
  from: string
  to: string
  body: string

  constructor(from: string, to: string, body: string) {
    this.from = from
    this.to = to
    this.body = body
  }

  toString() {
    return `To: ${this.to}, From: ${this.from}, body: ${this.body}`
  }
}

// The SMS class is for exercise 3
class SMS {
  number: string
  countryCode: string
  text: string

  constructor(number: string, countryCode: string, text: string) {
    this.number = number
    this.countryCode = countryCode
    this.text = text
  }
}



//
// 4. Extending an interface
//

// Create FormattedPreviewable for exercise 4 here!

// The ChatMessage class is for exercise 4
class ChatMessage {
  username: string
  message: string

  constructor(username: string, message: string) {
    this.username = username
    this.message = message
  }

  preview() {
    return `Username: ${this.username}, message: ${this.message}`
  }
}

// The printFormattedPreview function is for exercise 4
function printFormattedPreview(message: any) {
  if (message.formattedPreview) {
    console.log(`Custom format for ${message.label} ==> ${message.formattedPreview()}`)
    return
  }

  switch (message.format) {
    case 'json':
      console.log(`JSON preview for ${message.label} ==> ${JSON.stringify(message)}`)
      break
    case 'truncated':
      let truncatedPreview = message.preview()
      if (truncatedPreview.length > 18) {
        truncatedPreview = message.preview().substring(0, 15)
      }

      console.log(`Truncated preview for ${message.label} ==> ${truncatedPreview}...`)
      break
    default:
      printPreview(message)
  }
}

let chat1 = new ChatMessage('foo', 'Hey there, boo!', 'json')
let chat2 = new ChatMessage('boo', 'Hey @here, is it lunchtime?', 'truncated')

printFormattedPreview(chat1)
printFormattedPreview(chat2)
