import { Product } from 'src/products/entities/product.entity/product.entity';
import { User } from 'src/users/entities/user.entity/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['userId', 'productId'])
export class FavoriteProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @ManyToOne(() => User, (user) => user.favoriteProducts, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Product, (product) => product.favoritedBy, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;
}
