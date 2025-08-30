import {Column, DeleteDateColumn, Entity} from 'typeorm';

@Entity() // Decorador
export class Cat {
  // @PrimaryGeneratedColumn()
  @Column({primary: true, generated: true})
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
