import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";

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

  @CreateDateColumn({ name: 'created_At' })
  createAt: Date;

  @CreateDateColumn({ name: 'updated_At' })
  updateAt: Date;
}
