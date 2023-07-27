import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  idade: number;

  @Prop({ required: true })
  sexo: string;

  @Prop({ required: true })
  telefone: string;

  @Prop()
  endereco: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
