import { IsOptional, IsString, IsEnum } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({ description: 'The title of a task.' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'The description of a task.' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The status of a task.' })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
