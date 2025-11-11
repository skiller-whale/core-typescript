export default {}

type Foo = { foo: string }
type Bar = { bar: number }
type Baz = { baz: boolean }

type API = {
  [path: `/api/foo/${number}`]: Foo
  [path: `/api/bar/${number}`]: Bar
  [path: `/api/baz/${number}`]: Baz
}

type JsonResponse = {
  ok: boolean
  status: number
  payload: any
}

async function postJSON(url: string, payload: any): Promise<JsonResponse> {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload)
  }
  const response = await window.fetch(url, request)
  return { ok: response.ok, status: response.status, payload: null }
}

// these calls should all work
postJSON("/api/foo/433", { foo: "test" })
postJSON("/api/bar/433", { bar: 42 })
postJSON("/api/baz/433", { baz: false })

// these ones should raise errors
postJSON("/api/foof/999", { foo: "test" })
postJSON("/api/foo/999", { bar: 42 })
postJSON("/api/bar/bad-id", { bar: 999 })
postJSON("/api/baz/999", { baz: "not a Boolean" })

async function fetchJSON(url: string): Promise<JsonResponse> {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }
  const response = await window.fetch(url, request)
  const payload = await response.json()
  return { ok: response.ok, status: response.status, payload }
}

// these assignments should all work
const foo: Foo = (await fetchJSON("/api/foo/926")).payload
const bar: Bar = (await fetchJSON("/api/bar/344")).payload
const baz: Baz = (await fetchJSON("/api/baz/823")).payload

// these assignments should raise an error
const oopsItsFoo: Bar = (await fetchJSON("/api/foo/344")).payload
const notBaz: Baz = (await fetchJSON("/api/bar/344")).payload
const notAnything: any = (await fetchJSON("/not/even/close")).payload
