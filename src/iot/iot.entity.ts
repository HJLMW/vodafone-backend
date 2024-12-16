import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
// The `IoT` class is an entity representing an IoT device in the database.
// It is mapped to a table, and each instance of this class corresponds to a record in that table.
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

	@Column('bigint')
	mobileNumber: number;
}