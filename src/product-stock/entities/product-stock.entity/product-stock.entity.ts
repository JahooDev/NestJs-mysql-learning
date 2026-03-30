import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_stock')
export class ProductStockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column({ nullable: false, type: 'int' })
  quantity: number;

  @Column({ type: 'timestamp' })
  expirationDate: Date;

  @CreateDateColumn()
  addedAt: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  purchasePrice: number;
}
