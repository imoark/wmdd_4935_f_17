const fs = require('fs')
const posts = `${__dirname}/posts/`
const build = `${__dirname}/build/`

fs.readdir(posts, (err, data) => {
  data.forEach(file => {
    fs.readFile(`${posts}${file}`, (e, f) => {
      if(e) throw(e)
      fs.writeFile(`${build}${file.replace('.txt', '.html')}`, newPost(f), (e) => {
        if(e) throw(e)
      })
    })
  })
  fs.writeFile(`${build}index.html`, writeIndex(data), (e) => {
      if(e) throw(e)
  })
})

function newPost(file) {
  const html = `
  <html>
    <body>
      <div>
      ${file}
      </div>
    </body>
  </html>
  `
  return html
}

function writeIndex(titles) {
  let header = `
  <html>
    <body>
      <ol>
  `
  titles.forEach(f => {
    header += `<li><a href="${f.replace('txt', 'html')}">${f}</a></li>\n`
  })
  html = `
        ${header}
      </ol>
    </body>
  <html>
  `
  return html
}