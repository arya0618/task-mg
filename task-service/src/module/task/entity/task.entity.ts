import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { User } from './user.entity';
import { Types } from 'mongoose';
import { TaskPriority } from 'src/helpers/enums';
@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true, maxlength: 25 })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, enum: TaskPriority, default: TaskPriority.LOW })
  priority: string;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ default: false })
  isComplete: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  assignedTo: { type: Types.ObjectId; ref: 'User' };
}
export const TaskSchema = SchemaFactory.createForClass(Task);
