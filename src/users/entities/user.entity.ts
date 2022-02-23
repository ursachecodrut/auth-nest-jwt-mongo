import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class User {
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }

  @ObjectIdColumn()
  userId: ObjectID;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;
}
