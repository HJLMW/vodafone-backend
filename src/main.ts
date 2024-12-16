import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The bootstrap function is the entry point of the application.
async function bootstrap() {
	// Create an instance of the NestJS application using the AppModule.
	const app = await NestFactory.create(AppModule);

	// Enable Cross-Origin Resource Sharing (CORS) with the following configuration:
	// - `allowedHeaders: '*'` allows all headers.
	// - `origin: '*'` allows requests from any origin.
	// - `credentials: true` allows cookies and credentials to be sent with requests.
	app.enableCors({
		allowedHeaders: '*',
		origin: '*',
		credentials: true,
	});

	// Start the application and listen on the port specified in the environment variable `PORT`.
	// If `PORT` is not defined, it defaults to port 3001.
	await app.listen(process.env.PORT ?? 3001);
}

// Call the bootstrap function to initialize the application.
bootstrap();