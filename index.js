const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName="adidas"
  let searchText="search now"
  res.render("index", {siteName:siteName,searchText:searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle="adidas why and when"
    let blogContent="it is very good brand"
    res.render("blogpost", {blogTitle:blogTitle,blogContent:blogContent})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})