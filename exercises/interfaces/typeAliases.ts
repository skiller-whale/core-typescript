//
// 2. Interfaces vs type aliases
//

type MessageFormat = 'Email'|'SMS'|'DM'

type EmailAddress = { fullAddress: string }

type PhoneNumber = { countryCode: string, localNumber: string }

type MessageAddress = EmailAddress|PhoneNumber

type SendResult = [number, string, string]

type Sender = (from: MessageAddress, to: MessageAddress) => SendResult
