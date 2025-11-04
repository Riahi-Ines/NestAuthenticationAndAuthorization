import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../enums/role.enum';

export class CreateUserDto {
  @ApiProperty({ description: 'The email of user.' })
  email: string;

  @ApiProperty({ description: 'The role of user.' })
  role: Role;
}
