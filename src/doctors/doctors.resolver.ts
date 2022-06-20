import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DoctorsService } from './doctors.service';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { UpdateDoctorInput } from './dto/update-doctor.input';

@Resolver('Doctor')
export class DoctorsResolver {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Mutation('createDoctor')
  create(@Args('createDoctorInput') createDoctorInput: CreateDoctorInput) {
    return this.doctorsService.create(createDoctorInput);
  }

  @Query('doctors')
  findAll() {
    return this.doctorsService.findAll();
  }

  @Query('doctor')
  findOne(@Args('id') id: number) {
    return this.doctorsService.findOne(id);
  }

  @Mutation('updateDoctor')
  update(@Args('updateDoctorInput') updateDoctorInput: UpdateDoctorInput) {
    return this.doctorsService.update(updateDoctorInput.id, updateDoctorInput);
  }

  @Mutation('removeDoctor')
  remove(@Args('id') id: number) {
    return this.doctorsService.remove(id);
  }
}
