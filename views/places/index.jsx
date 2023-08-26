require('dotenv').config()
const express = require('express')
const app = express() 

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  