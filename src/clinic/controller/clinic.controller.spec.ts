import { Test, TestingModule } from "@nestjs/testing";
import { ClinicController } from "../controller/clinic.controller";
import { ClinicService } from "../service/clinic.service";
import { PatientDTO } from "../dto/patient.dto";
import { Patient } from "../schemas/patient.schema";

describe("ClinicController", () => {
  let clinicController: ClinicController;
  let clinicService: ClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicController],
      providers: [ClinicService],
    }).compile();

    clinicController = module.get<ClinicController>(ClinicController);
    clinicService = module.get<ClinicService>(ClinicService);
  });

  it("should be defined", () => {
    expect(clinicController).toBeDefined();
  });

  describe("createPatient", () => {
    it("should create a patient", async () => {
      const patientDTO: PatientDTO = {
        name: "John Doe",
        age: 30,
        gender: "Male",
        phoneNumber: "1234567890",
        address: "123 Main St",
      };

      const createdPatient: Patient = {
        _id: "1123", // Use '_id' to match the Patient type
        name: patientDTO.name,
        age: patientDTO.age,
        gender: patientDTO.gender,
        phoneNumber: patientDTO.phoneNumber,
        address: patientDTO.address,
      };

      jest
        .spyOn(clinicService, "createPatient")
        .mockResolvedValue(createdPatient);

      expect(
        (await clinicController.createPatient(patientDTO)) as unknown as Patient
      ).toEqual(createdPatient);
    });
  });

});
