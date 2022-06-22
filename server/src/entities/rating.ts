import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("ratings")
export class Rating extends BaseEntity {
  @ObjectIdColumn()
  _id!: string;

  @Column()
  movieId!: string;

  @Column()
  userId!: string;

  @Column({ type: "integer" })
  value!: number;
}
