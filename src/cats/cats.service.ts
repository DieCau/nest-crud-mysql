import {Injectable} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {UpdateCatDto} from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto) {
    return 'Esta acción agrega un nuevo Gato 😺';
  }

  findAll() {
    return `Esta acción retorna todos los gatos 😸😸😸`;
  }

  findOne(id: number) {
    return `Esta acción retorna el gato #${id} 😸👈`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `Esta acción actualiza el gato #${id} 😸✏️`;
  }

  remove(id: number) {
    return `Esta acción remueve el gato #${id} 😸🚷`;
  }
}
