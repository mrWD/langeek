const express = require('express')
const path = require('path')
const axios = require('axios')
const cors = require('cors')
const { google } = require('googleapis')
const keys = require('./keys.json')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(requestTime)
// app.use(logger)

// app.use(serverRoutes)

app.use(cors())

const mapLanguageToSheetId = {
  common: '10yvq_gIteRc4zt4ZiR4tjPKAZN9oIMxYkVynb53B6MQ',
  english: '1mjpE9l-_PjNaqcjmkNNUHauvPjuqGXyomXCI2ywcjR0',
  german: '1WkYS-OqQTILxrsBvC7aP5lmacsMPplUnsvpxwCrfl4g',
  italian: '1rEQvViKUoVb-jVr7o4tarrSyEQMmnYLEhqlLBFToomg',
  french: '1G55xbdwCX90F9OIPgFtwCdXFi8tiWovn5KCeY0vyqQk',
  polish: '14GjmV2GvLxVEAJPxj_SkdVAzh_QvdS4Ln5LeICScYHM',
  russian: '1IUYXG57P9rGz2VBu2vUmFIggMIDDcOFysy9wCOb_d_o',
}

const getTranslations = (tableColNames, translationList, params) => {
  const [firstColName] = tableColNames
  const colIndex1 = tableColNames.findIndex(language => language === params.lang)
  const colIndex2 = tableColNames.findIndex(language => language === params.nativeLang)
  const colName1 = tableColNames[colIndex1]
  const colName2 = tableColNames[colIndex2]

  return translationList.map((translations) => ({
    [firstColName]: translations[0],
    [colName1]: translations[colIndex1],
    [colName2]: translations[colIndex2],
  }))
}

const getConjugations = (tableColNames, translationList) => {
  return translationList.map((translations) => {
    return translations.reduce((acc, word, i) => {
      return {
        ...acc,
        [tableColNames[i]]: word,
      }
    }, {})
  })
}

// infinitive + pronounces
const getData = async (cl, params) => {
  const gsapi = google.sheets({ version: 'v4', auth: cl })
  const opt = {
    spreadsheetId: mapLanguageToSheetId[params.sheet],
    range: params.name,
  }

  const { data } = await gsapi.spreadsheets.values.get(opt)

  const [tableColNames] = data.values
  const translationList = params.sheet === 'common'
    ? data.values.filter(([word]) => params.words.includes(word))
    : data.values.slice(1)

  if (params.sheet === 'common') {
    return getTranslations(tableColNames, translationList, params)
  }

  return getConjugations(tableColNames, translationList)
}

// langeek@gleaming-realm-344916.iam.gserviceaccount.com
// http://localhost:3000/conjugations
app.get('/list', async (req, res) => {
  const client = new google.auth.JWT(
    keys.client_email,
    undefined,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  )

  client.authorize(async (err, tokens) => {
    try {
      if (err) {
        console.log('has error:', err);
        throw err
      }

      console.log('req start');

      const data = await getData(client, {
        sheet: req.query.sheet,
        name: req.query.name,
        lang: req.query.lang,
        nativeLang: req.query.nativeLang,
        words: req.query.words,
      })

      console.log('req success');

      res.json(data)
    } catch (err) {
      console.log('Error: ', err.message)
      res.status(400).send({
        message: err.message
      })
    }
  })
})

// app.use((req, res, next) => {
//   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//     return res.redirect('https://' + req.get('host') + req.url);
//   }

//   next();
// });

app.use(express.static('./views/dist/langeek'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: './views/dist/langeek/' });
});

app.listen(PORT, () => {
  console.log(`Server has been started on port http://localhost:${PORT}...`);
});
