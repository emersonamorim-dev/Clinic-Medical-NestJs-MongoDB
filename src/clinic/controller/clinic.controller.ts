import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { ClinicService } from "../service/clinic.service";
import { PatientDTO } from "../dto/patient.dto";

@Controller("clinic")
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post("patients")
  async createPatient(@Body() patientDTO: PatientDTO) {
    const createdPatient = await this.clinicService.createPatient(patientDTO);
    return { message: "Paciente criado com sucesso", data: createdPatient };
  }

  @Get("patients")
  async getAllPatients() {
    const patients = await this.clinicService.getAllPatients();
    return {
      message: "Todos os pacientes recuperados com sucesso",
      data: patients,
    };
  }

  @Get("patients/:id")
  async getPatientById(@Param("id") id: string) {
    const patient = await this.clinicService.getPatientById(id);
    return { message: "Paciente recuperado com sucesso", data: patient };
  }

  @Put("patients/:id")
  async updatePatient(@Param("id") id: string, @Body() patientDTO: PatientDTO) {
    const updatedPatient = await this.clinicService.updatePatient(
      id,
      patientDTO
    );
    return { message: "Paciente atualizado com sucesso", data: updatedPatient };
  }

  @Delete("patients/:id")
  async deletePatient(@Param("id") id: string) {
    const deletedPatient = await this.clinicService.deletePatient(id);
    return { message: "Paciente excluído com sucesso", data: deletedPatient };
  }
}
