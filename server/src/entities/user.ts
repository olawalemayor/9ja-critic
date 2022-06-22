import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany } from "typeorm";
import { Rating } from "./rating";

@Entity("users")
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Rating, (rating) => rating.userId)
  Ratings!: Rating[];
}
