class Fetch {
  constructor () {}

  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',

      blocks: [
        {
          opcode: 'get',

          blockType: Scratch.BlockType.REPORTER,

          text: 'GET from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://httpbin.org/get'
            }
          }
        },
        {
          opcode: 'post',

          blockType: Scratch.BlockType.REPORTER,

          text: 'POST [BODY] to [URL] with [HEADERS]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://httpbin.org/post'
            },
            BODY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            }
           // HEADERS: {
           //   type: Scratch.ArgumentType.STRING,
           //   defaultValue: "'Content-type', 'application/json'"
           // }
          }
        }
      ]
    }
  }

  get ({ URL }) {
    return fetch(URL, { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }

  post ({ URL, BODY, HEADERS }) {
    return fetch(URL, { method: 'POST', body: BODY, headers:"'Content-type', 'application/json'"  })
      .then(res => res.text())
      .catch(err => '')
  }
}

Scratch.extensions.register(new Fetch())
