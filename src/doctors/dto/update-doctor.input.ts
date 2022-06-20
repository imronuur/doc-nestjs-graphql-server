import { CreateDoctorInput } from './create-doctor.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDoctorInput extends PartialType(CreateDoctorInput) {
  id: number;
}
