import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';
import {
  Permission,
  PermissionType,
} from 'src/iam/authorization/permission.type';
import { json } from 'stream/consumers';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ enum: Role, default: Role.USER })
  role: Role;

  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];
}
