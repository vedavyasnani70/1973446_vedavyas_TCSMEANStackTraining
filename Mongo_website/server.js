let express = require('express')
let bodyParser = require('body-parser')
let MongoClient = require('mongodb').MongoClient
let app = express()
let port=9090;

let url = "mongodb://localhost:27017/onlinestore";

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('onlinestore')
    const quotesCollection = db.collection('products')

    // ========================
    // Middlewares
    // ========================
    //app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

    // ========================
    // Routes
    // ========================
    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(quotes => {
          res.render('index.html', { quotes: quotes })
        })
        .catch(/* ... */)
    })

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Veda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => res.json('Success'))
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
      quotesCollection.deleteOne(
        { name: req.body.name }
      )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quote to delete')
          }
          res.json('Deleted quote')
        })
        .catch(error => console.error(error))
    })
})
app.listen(9090,()=>console.log("Server running on port number 9090"));