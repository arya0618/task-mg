import { IsString, IsNotEmpty, IsEnum, IsBoolean } from 'class-validator';
import { TaskPriority } from '../../../helpers/enums';
import { ApiProperty } from '@nestjs/swagger';
export class AddTaskDto {
  @ApiProperty({
    example: 'Create presentation',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Presentaion should be related to blockchian and its types',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: 'high|low|medium',
    required: true,
  })
  @IsEnum(TaskPriority)
  priority: string;

  @ApiProperty({
    example: 'Nov 2 2023',
    required: true,
  })
  @IsNotEmpty()
  // @IsString()
  dueDate: Date;

  @ApiProperty({
    example: false,
    required: true,
  })
  @IsBoolean()
  isComplete: boolean;

  @ApiProperty({
    example: '65602dcc133bc70a665065fc',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  assignedTo: any;
}
