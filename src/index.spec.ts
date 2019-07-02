import { times10 } from '.'

describe('a test', () => {
  it('should give the right answer', () => {
    const ans = times10(99)

    expect(ans).toEqual(990)
  })
})
