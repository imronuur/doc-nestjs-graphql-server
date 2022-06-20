
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateBlogInput {
    exampleField?: Nullable<number>;
}

export class UpdateBlogInput {
    id: number;
}

export class CreateDoctorInput {
    exampleField?: Nullable<number>;
}

export class UpdateDoctorInput {
    id: number;
}

export class CreateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class UpdateUserInput {
    id: number;
}

export class Blog {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract blogs(): Nullable<Blog>[] | Promise<Nullable<Blog>[]>;

    abstract blog(id: number): Nullable<Blog> | Promise<Nullable<Blog>>;

    abstract doctors(): Nullable<Doctor>[] | Promise<Nullable<Doctor>[]>;

    abstract doctor(id: number): Nullable<Doctor> | Promise<Nullable<Doctor>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createBlog(createBlogInput: CreateBlogInput): Blog | Promise<Blog>;

    abstract updateBlog(updateBlogInput: UpdateBlogInput): Blog | Promise<Blog>;

    abstract removeBlog(id: number): Nullable<Blog> | Promise<Nullable<Blog>>;

    abstract createDoctor(createDoctorInput: CreateDoctorInput): Doctor | Promise<Doctor>;

    abstract updateDoctor(updateDoctorInput: UpdateDoctorInput): Doctor | Promise<Doctor>;

    abstract removeDoctor(id: number): Nullable<Doctor> | Promise<Nullable<Doctor>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class AddressHistory {
    address?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    isCurrent?: Nullable<boolean>;
}

export class WorkHistory {
    hospital?: Nullable<string>;
    position?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    isCurrent?: Nullable<boolean>;
}

export class Qualification {
    name?: Nullable<string>;
    year?: Nullable<DateTime>;
    institution?: Nullable<string>;
}

export class Award {
    name?: Nullable<string>;
    year?: Nullable<DateTime>;
    institution?: Nullable<string>;
}

export class Doctor {
    age?: Nullable<number>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    image?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    specialization?: Nullable<string>;
    addressHistory?: Nullable<Nullable<AddressHistory>[]>;
    workHistory?: Nullable<Nullable<WorkHistory>[]>;
    qualifications?: Nullable<Nullable<Qualification>[]>;
    awards?: Nullable<Nullable<Award>[]>;
}

export class User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<string>;
    status?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isApproved?: Nullable<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;
