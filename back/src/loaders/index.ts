// Loaders
import dependencyInjectorLoader from './dependencyInjector'
import mongooseLoader from './mongoose'
import expressLoader from './express'
import Logger from './logger'

const Loaders = async ({ expressApp }) => {
	/** Mongo and Mongoose */
	const mongoConnection = await mongooseLoader()
	Logger.info('DB connected successfully!')

	/** User - Dependency Injection  **/
	const userModel = {
		name: 'userModel',
		model: require("../models/auth/user").default
	}
	await dependencyInjectorLoader({
		mongoConnection,
		models: [userModel]
	})
	Logger.info('mongoose models successfully injected into DI container')

	/**  Express App **/
	await expressLoader(expressApp)
	Logger.info('✌️ Express loaded')

}

export default Loaders
