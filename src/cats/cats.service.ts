import {Injectable} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {UpdateCatDto} from './dto/update-cat.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Cat} from './entities/cat.entity';
import {Repository} from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    // Aqui se crea la instancia
    const cat = this.catRepository.create(createCatDto);
    try {
      // Aqui se Guarda los datos en la DB
      return await this.catRepository.save(cat);
    } catch (err) {
      console.log(err);
    }
  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({id});
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await this.catRepository.softDelete(id);
  }
}
