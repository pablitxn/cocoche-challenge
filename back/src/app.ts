// We need this in order to use @Decorators
import 'reflect-metadata'
// Project configs
import config from './config'
// Express
import express from 'express'
// Logs
import Logger from './loaders/logger'

async function startServer() {
	const app = express()

	await require('./loaders').default({
		expressApp: app,
	})

	app.listen(config.port, () => {
		Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `)
	})

}

startServer()
