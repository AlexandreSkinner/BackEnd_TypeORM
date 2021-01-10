import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Content } from "./Content";

// Lesson --> Aula
@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  // Uma Lesson (aula) possui um Content (conteúdo)
  @OneToOne( type => Content, lesson => lesson )
  content: Content;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn( { name: 'updated_At' })
  updatedAt: Date;

}
