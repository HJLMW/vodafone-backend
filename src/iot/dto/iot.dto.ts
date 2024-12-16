import { Field, ObjectType, InputType, Float } from '@nestjs/graphql';

@ObjectType()
export class LatLng {
	@Field()
	lat: number;

	@Field()
	lng: number;
}

@InputType()
export class LatLngInput {
	@Field(() => Float)
	lat: number;

	@Field(() => Float)
	lng: number;
}

@ObjectType()
export class IoT {
	@Field()
	id: string;

	@Field()
	iotCode: string;

	@Field()
	title: string;

	@Field()
	description: string;

	@Field(() => LatLng)
	coordinates: LatLng;

	@Field()
	lastConnection: number;

	@Field()
	mobileNumber: number;
}

@InputType()
export class IoTInput {
	@Field({ nullable: true })
	id?: string;

	@Field()
	title: string;

	@Field()
	iotCode: string;

	@Field()
	description: string;

	@Field(() => LatLngInput)
	coordinates: LatLngInput;

	@Field()
	lastConnection: number;

	@Field()
	mobileNumber: number;
}