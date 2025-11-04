import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../enums/role.enum';
import { PermissionType } from 'src/iam/authorization/permission.type';

export class CreateUserDto {
  @ApiProperty({ description: 'The email of user.' })
  email: string;

  @ApiProperty({ description: 'The role of user.' })
  role: Role;

  @ApiProperty({ description: 'The permissions of user.' })
  permissions: PermissionType[];
}
