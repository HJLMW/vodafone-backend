import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IoT } from './iot/iot.entity';
import { IotModule } from './iot/iot.module';

// The AppModule is the root module of the NestJS application.
// Using Postgres DB from Railway and also GraphQL to test porpuse. (/graphql path available)
@Module({
	imports: [
		// Configure the GraphQLModule with ApolloDriver.
		// - `autoSchemaFile: true` generates the GraphQL schema automatically.
		// - `sortSchema: true` sorts the schema alphabetically for better readability.
		// - `playground: true` enables the GraphQL Playground for interactive testing.
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			sortSchema: true,
			playground: true,
		}),
		// Import the IoT module which contains logic related to IoT devices.
		IotModule,
		// Configure TypeORM with a PostgreSQL database.
		// - `type: 'postgres'` specifies the database type as PostgreSQL.
		// - `url: process.env.DATABASE_URL` retrieves the database connection string from environment variables.
		// - `autoLoadEntities: true` automatically loads entities defined in the application.
		// - `synchronize: true` automatically synchronizes the database schema with the entity definitions.
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env.DATABASE_URL,
			autoLoadEntities: true,
			synchronize: true,
		}),
		// Register the IoT entity for use with the TypeORM repository pattern.
		TypeOrmModule.forFeature([IoT]),
	],
})
export class AppModule { }