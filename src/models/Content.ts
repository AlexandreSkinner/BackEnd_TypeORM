import { Entity, Column,  PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Lesson } from "./Lesson";

// Content --> Conteúdo
@Entity()
export class Content {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  linkContent: string;

  // Um Content possui uma Lesson
  // @JoinColumn() => Informa que Content possuirá a foreing key lesson_id
  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()               
  lesson: Lesson;

}