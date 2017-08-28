import { expect } from 'chai'
import jsdom from 'jsdom'
const { JSDOM } = jsdom
import fs from 'fs'

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})

describe('index.html', () => {
  it('should say hello', (done) => {
    // const index = fs.readFileSync('./src/index.html', 'utf-8')
    // const dom = new JSDOM(index)
    const dom = JSDOM.fromFile('./src/index.html').then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal("Hello World!")
      done()
      dom.close()
    })
  })
})