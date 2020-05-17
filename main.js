
const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.use(express.static('public'))

const ementas2020 = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2020.json';


app.get('/ementas2020', (req, res) => {
	fetch(ementas2020)

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

const ementas2019 = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2019.json';

app.get('/ementas2019', (req, res) => {
	fetch(ementas2019)

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

const ementas2018 = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2018.json';

app.get('/ementas2018', (req, res) => {
	fetch(ementas2018)

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

const ementas2017 = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2017.json';

app.get('/ementas2017', (req, res) => {
	fetch(ementas2017)

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

const ementas2016 = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2016.json';

app.get('/ementas2016', (req, res) => {
	fetch(ementas2016)

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

const ementas2015 = 'https://dadosabertos.camara.leg.br/arquivos/proposicoes/json/proposicoes-2015.json';

app.get('/ementas2015', (req, res) => {
	fetch(ementas2015)

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