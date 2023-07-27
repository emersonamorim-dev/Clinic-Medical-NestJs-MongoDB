// clinic.module.ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClinicController } from "./controller/clinic.controller";
import { ClinicService } from "./service/clinic.service";
import { PatientSchema } from "./schemas/patient.schema";
import { DatabaseModule } from "./database.module";

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: "Patient", schema: PatientSchema }]),
  ],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}

