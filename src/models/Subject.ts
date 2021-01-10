import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Lesson } from "./Lesson";

// Subject --> Disciplina (Materia)
@Entity()
export class Subject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @Column()
  duration: number;

  // Uma Subject (Disciplina) possui muitas Lessons (Aulas)
  @OneToMany(type => Lesson, subject => Subject)
  lessons: Array<Lesson>;

  @CreateDateColumn({ name: 'created_At' })
  createAt: Date;

  @CreateDateColumn({ name: 'updated_At' })
  updateAt: Date;
}
