import { FavoriteProductEntity } from 'src/favorite-products/entities/favorite-product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'int' })
  age: number;

  @OneToMany(() => FavoriteProductEntity, (favorite) => favorite.user)
  favoriteProducts: FavoriteProductEntity[];
}
