import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from '../../properties/entities/property.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false }) // maximo 50 chars y no puede ser nulo
  username: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 50, nullable: false }) // maximo 50 chars y no puede ser nulo
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50, nullable: false }) // maximo 50 chars y no puede ser nulo
  lastName: string;

  @Column({ type: 'integer', unique: true, nullable: false })
  document: number;

  @Column({
    type: 'varchar',
    default:
      'https://res.cloudinary.com/dcqdilhek/image/upload/fl_preserve_transparency/v1715136207/zmuncvwsnlws77vegwxq.jpg',
  })
  image: string;

  @Column({ type: 'integer', nullable: true })
  phone: number;

  @Column({ type: 'integer', nullable: false })
  cellphone: number;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email: string;

  @Column({ name: 'google_account', type: 'boolean', default: false })
  googleAccount: boolean;

  @Column({ type: 'bool', default: false })
  validate: boolean;

  @Column({ type: 'bool', default: true })
  state: boolean;

  @Column({ type: 'varchar', default: 'user' })
  rol: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    select: false,
    default: new Date(),
    nullable: false,
  })
  createdAt: Date;

  @Column({ name: 'last_login', nullable: false })
  lastLogin: Date;

  @Column({ name: 'admin_modify', type: 'uuid', nullable: true })
  adminModify: string;

  @OneToMany(() => Property, (prop) => prop.user, { eager: true })
  @JoinColumn()
  properties: Property[];
}
