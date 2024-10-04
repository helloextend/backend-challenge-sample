import { helloWorld } from './hello-world'

describe('helloWorld', () => {
  it('returns "Hello, world!"', () => {
    expect(helloWorld()).toBe('Hello, world!')
  })
})
