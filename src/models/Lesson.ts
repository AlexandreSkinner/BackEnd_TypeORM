import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

// Lesson --> Aula
@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn( { name: 'updated_At' })
  updatedAt: Date;
}
