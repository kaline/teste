
const express = require('express')
const app = express()
const fetch = require('node-fetch')
app.use(express.static('public'))

const url = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2020.json';


app.get('/ementas', (req, res) => {
	fetch(url)

	.then(response =>{
		return response.json();
	})
	.then(data =>{
		console.log(data);
		res.send(data);
	})
	.catch(err => {
		console.log('Failed:', err);
	})
   
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});