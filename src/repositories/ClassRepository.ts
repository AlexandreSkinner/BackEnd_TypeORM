import { EntityRepository, Repository } from 'typeorm';
import { Class } from '../models/Class';

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Array<Class>> {
    return this.find({
      where: { 
        name, 
      },
    });
  }
}