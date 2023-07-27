import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Patient } from "../schemas/patient.schema";
import { PatientDTO } from "../dto/patient.dto";

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel("Patient") private readonly patientModel: Model<Patient>
  ) {}

  async createPatient(patientDTO: PatientDTO): Promise<Patient> {
    const createdPatient = new this.patientModel(patientDTO);
    return createdPatient.save();
  }

  async getAllPatients(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  async getPatientById(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id).exec();
    if (!patient) {
      throw new NotFoundException("Paciente não encontrado");
    }
    return patient;
  }

  async updatePatient(id: string, patientDTO: PatientDTO): Promise<Patient> {
    const updatedPatient = await this.patientModel
      .findByIdAndUpdate(id, patientDTO, { new: true })
      .exec();
    if (!updatedPatient) {
      throw new NotFoundException("Paciente não encontrado");
    }
    return updatedPatient;
  }

  async deletePatient(id: string): Promise<Patient> {
    const deletedPatient = await this.patientModel.findByIdAndRemove(id).exec();
    if (!deletedPatient) {
      throw new NotFoundException("Paciente não encontrado");
    }
    return deletedPatient;
  }
}
