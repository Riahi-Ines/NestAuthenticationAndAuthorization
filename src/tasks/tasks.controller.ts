import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/iam/authorization/decorators/roles.decorator';
import { Role } from 'src/users/enums/role.enum';
import { Permission } from 'src/iam/authorization/permission.type';
import { Permissions } from 'src/iam/authorization/decorators/permissions.decorator';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //@Roles(Role.ADMIN)
  @Permissions(Permission.CreateTask)
  @Get()
  getAll(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  create(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
