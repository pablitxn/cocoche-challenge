// Express
import { Application } from 'express'
// Middlewares
import bodyParser from 'body-parser'
import cors from 'cors'
// Routes
import routes from '../api'
// Configs
import config from '../config'

const Express = (app: Application) => {
	/**  Server Status  **/
	app.get('/status', (req, res) => {
		res.status(200).end()
	})
	app.head('/status', (req, res) => {
		res.status(200).end()
	})
	/**  Middlewares  **/
	app.enable('trust proxy')
	app.use(cors())
	app.use(require('method-override')())
	app.use(bodyParser.json())
	/**  Load API routes  **/
	app.use(config.api.prefix, routes())
}

export default Express
