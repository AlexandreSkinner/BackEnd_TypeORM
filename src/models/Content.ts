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

  // Um Conteúdo (Content) possui uma Aula (Lesson)
  // @JoinColumn() => Informa que Content possuirá a foreing key lessonId
  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()               
  lesson: Lesson;

}