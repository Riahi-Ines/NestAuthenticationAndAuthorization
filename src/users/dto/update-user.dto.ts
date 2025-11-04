import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Role } from '../enums/role.enum';
import { PermissionType } from 'src/iam/authorization/permission.type';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: 'The email of user.' })
  email: string;

  @ApiProperty({ description: 'The role of user.' })
  role: Role;

  @ApiProperty({ description: 'The permissions of user.' })
  permissions: PermissionType[];
}
