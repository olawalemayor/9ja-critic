import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany } from "typeorm";
import { Rating } from "./rating";

@Entity("movies")
export class Movie extends BaseEntity {
  @ObjectIdColumn()
  _id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  cast!: string[];

  @Column()
  likes!: number;

  @OneToMany(() => Rating, (rating) => rating.movieId)
  Ratings!: Rating[];
}
