import { Column, Entity, Unique } from 'typeorm';
import { BaseEntity } from './abstract/base.entity';

@Entity('users')
@Unique(['email'])
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;
}
