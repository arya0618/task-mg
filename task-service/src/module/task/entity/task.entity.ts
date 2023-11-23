import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  type: string;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
