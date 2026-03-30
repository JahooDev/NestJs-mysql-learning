import { FavoriteProductEntity } from 'src/favorite-products/entities/favorite-product.entity';
import { ProductTypeEnum } from 'src/products/_utils/product-type.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  producer: string;

  @Column()
  category: ProductTypeEnum;

  @Column()
  description: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column()
  added: Date;

  @Column()
  price: number;

  @OneToMany(() => FavoriteProductEntity, (favorite) => favorite.product)
  favoritedBy: FavoriteProductEntity[];
}
