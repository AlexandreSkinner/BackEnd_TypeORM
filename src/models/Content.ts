import { Entity, Column,  PrimaryGeneratedColumn } from "typeorm";

// Content --> Conteúdo
@Entity()
export class Content {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  linkContent: string;
}