class ImmutableMap {
  private readonly entries: [unknown, unknown][]

  constructor(entries: [unknown, unknown][]) {
    this.entries = entries
  }

  get size(): number {
    return this.entries.length
  }

  delete(key: unknown): ImmutableMap {
    const index = this.entries.findIndex(([k]) => k === key)
    return index > -1
      ? new ImmutableMap([...this.entries.slice(0, index), ...this.entries.slice(index + 1)])
      : this
  }

  get(key: unknown): unknown | undefined {
    const entry = this.entries.find(([k]) => k === key)
    return entry ? entry[1] : undefined
  }

  has(key: unknown): boolean {
    return this.entries.some(([k]) => k === key)
  }

  set(key: unknown, value: unknown): ImmutableMap {
    const index = this.entries.findIndex(([k]) => k === key)
     return index > -1
       ? new ImmutableMap([...this.entries.slice(0, index), [key, value], ...this.entries.slice(index + 1)])
       : this
  }

  mapKeys(callback: (key: unknown) => unknown): ImmutableMap {
    return new ImmutableMap(this.entries.map(([k, v]) => [callback(k), v]))
  }

  mapValues(callback: (value: unknown) => unknown): ImmutableMap {
    return new ImmutableMap(this.entries.map(([k, v]) => [k, callback(v)]))
  }
}
