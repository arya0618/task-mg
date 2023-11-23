import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  type: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
