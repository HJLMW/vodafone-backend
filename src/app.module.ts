import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IoT } from './iot/iot.entity';
import { IotModule } from './iot/iot.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			sortSchema: true,
			playground: true,
		}),
		IotModule,
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env.DATABASE_URL,
			autoLoadEntities: true,
			synchronize: true,
		}),
		TypeOrmModule.forFeature([IoT]),
	],
})
export class AppModule { }
