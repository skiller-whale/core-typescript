export type EmailProps = {
  from: string
  to: string
  subject: string
  body: string
}

export const isEmailProps = (x: unknown): x is EmailProps => typeof x === 'object' && x !== null
  && typeof (x as EmailProps).from === 'string'
  && typeof (x as EmailProps).to === 'string'
  && typeof (x as EmailProps).subject === 'string'
  && typeof (x as EmailProps).body === 'string'
