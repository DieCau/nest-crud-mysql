import {Column, Entity} from 'typeorm';

@Entity() // Decorador
export class Cat {
  // @PrimaryGeneratedColumn()
  @Column({primary: true, generated: true})
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  breed: string;
}
