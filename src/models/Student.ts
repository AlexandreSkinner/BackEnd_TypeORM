import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

// Student --> Estudante
@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  key: number;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
