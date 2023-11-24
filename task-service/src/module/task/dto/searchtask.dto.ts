import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { TaskPriority } from '../../../helpers/enums';
import { ApiProperty } from '@nestjs/swagger';
export class SearchTaskDto {
  @ApiProperty({
    example: 'high|low|medium',
    required: true,
  })
  @IsEnum(TaskPriority)
  priority: string;

  @ApiProperty({
    example: 1,
    required: true,
  })
  @IsOptional()
  prioritySort: number;

  @ApiProperty({
    example: 'Nov 2 2023',
    required: true,
  })
  @IsNotEmpty()
  // @IsString()
  dueDate: Date;

  @ApiProperty({
    example: 1,
    required: true,
  })
  @IsOptional()
  dueDateSort: number;

  @ApiProperty({
    example: 1,
    required: true,
  })
  isComplete: number;
}
