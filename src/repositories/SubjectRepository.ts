import { EntityRepository, Repository } from 'typeorm';
import { Subject } from '../models/Subject';

@EntityRepository(Subject)
export class SubjectRepository extends Repository<Subject> {
  public async findByName(name: string): Promise<Array<Subject>> {
    return this.find({
      where: { 
        name, 
      },
    });
  }
}