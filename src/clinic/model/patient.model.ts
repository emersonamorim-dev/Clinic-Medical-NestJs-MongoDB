import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Patient } from "../schemas/patient.schema";

@Schema()
export class PatientModel {
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

export type PatientDocument = Patient & Document;
export const PatientSchema = SchemaFactory.createForClass(Patient);
