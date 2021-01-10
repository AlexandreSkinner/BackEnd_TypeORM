import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import { Content } from "./Content";
import { Subject } from "./Subject";

// Lesson --> Aula
@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  // Uma Aula (Lesson) possui um Conteúdo (Content)
  @OneToOne(type => Content, lesson => lesson)
  content: Content;

  // Muitas Aulas (Lesson) estão relacionadas a uma Disciplina (Subject)
  @ManyToOne(type => Subject, lessons => Lesson )
  subject: Subject;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn( { name: 'updated_At' })
  updatedAt: Date;

}
