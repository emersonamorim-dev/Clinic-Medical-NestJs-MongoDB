import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import { ClinicModule } from "./clinic/clinic.module";

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      connectionName: "clinic-medical",
    }),
    ClinicModule,
  ],
})
export class AppModule {}

