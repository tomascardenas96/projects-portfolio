import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  note_id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({
    name: 'user_id'
  })
  user: User;
}
