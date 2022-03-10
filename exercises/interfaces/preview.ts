export type Preview = () => string

export interface Previewable {
  label: string
  body: string
  preview: Preview
}

export function printPreview (message: Previewable) {
  console.log(`Preview for ${message.label}:`)
  console.log(message.preview())
}
