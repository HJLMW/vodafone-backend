import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class IoT {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	iotCode: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column('json')
	coordinates: { lat: number; lng: number };

	@Column('bigint')
	lastConnection: number;

	@Column()
	mobileNumber: number;
}