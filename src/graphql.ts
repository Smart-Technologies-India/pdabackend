
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Agree {
    NONE = "NONE",
    YES = "YES",
    NO = "NO"
}

export enum Status {
    NONE = "NONE",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum Role {
    NONE = "NONE",
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    ATP = "ATP",
    JTP = "JTP",
    MAMLATDAR = "MAMLATDAR",
    FIRE = "FIRE",
    LANDSUPTD = "LANDSUPTD",
    JE = "JE",
    SITESUPERVISOR = "SITESUPERVISOR",
    ARCHITECTASST = "ARCHITECTASST",
    PLANNINGDRAUGHTSMAN = "PLANNINGDRAUGHTSMAN",
    ARCHDRAUGHTSMANSP = "ARCHDRAUGHTSMANSP",
    ARCHDRAUGHTSMANST = "ARCHDRAUGHTSMANST",
    USER = "USER"
}

export enum Department {
    NONE = "NONE",
    PDA = "PDA",
    EOCS = "EOCS",
    LAND = "LAND",
    MAMLATDAR = "MAMLATDAR",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    FIRE = "FIRE",
    COASTGUARD = "COASTGUARD"
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface CreateRtiInput {
    userId: number;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    user_uid?: Nullable<string>;
    subject_info: string;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    description: string;
    information?: Nullable<string>;
    proverty_line_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    signature_url?: Nullable<string>;
    remarks?: Nullable<string>;
    attachments?: Nullable<string>;
    form_status: number;
    status?: Nullable<Status>;
}

export interface UpdateRtiInput {
    userId?: Nullable<number>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    user_uid?: Nullable<string>;
    subject_info?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    description?: Nullable<string>;
    information?: Nullable<string>;
    proverty_line_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    signature_url?: Nullable<string>;
    remarks?: Nullable<string>;
    attachments?: Nullable<string>;
    form_status?: Nullable<number>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateUserInput {
    exampleField: number;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface CreatePetroleumInput {
    exampleField: number;
}

export interface UpdatePetroleumInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface CreateZoneinfoInput {
    exampleField: number;
}

export interface UpdateZoneinfoInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface CreateOldcopyInput {
    exampleField: number;
}

export interface UpdateOldcopyInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface SignUpUserInput {
    name: string;
    contact: string;
    password: string;
}

export interface Rti {
    id: number;
    userId: number;
    user_uid: string;
    name: string;
    email: string;
    address: string;
    mobile: number;
    subject_info: string;
    from_date: DateTime;
    to_date: DateTime;
    description: string;
    information: string;
    proverty_line_url: string;
    iagree: Agree;
    remarks: string;
    signature_url: string;
    attachments: string;
    form_status: Status;
    rejection_reason: string;
    certificate_id: Status;
    certificate_date: DateTime;
    certificate_url: string;
    comments_dept: string;
    condition_to_follow: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
}

export interface User {
    exampleField: number;
}

export interface Petroleum {
    exampleField: number;
}

export interface Zoneinfo {
    exampleField: number;
}

export interface Oldcopy {
    exampleField: number;
}

export interface Auth {
    token: string;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_key?: Nullable<string>;
    role: Role;
    department: Department;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface IQuery {
    getAllRti(): Rti[] | Promise<Rti[]>;
    getAllRtiById(id: number): Rti | Promise<Rti>;
    user(id: number): User | Promise<User>;
    petroleum(id: number): Petroleum | Promise<Petroleum>;
    zoneinfo(id: number): Zoneinfo | Promise<Zoneinfo>;
    oldcopy(id: number): Oldcopy | Promise<Oldcopy>;
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
}

export interface IMutation {
    createRti(createRtiInput: CreateRtiInput): Rti | Promise<Rti>;
    updateRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    deleteRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
    createPetroleum(createPetroleumInput: CreatePetroleumInput): Petroleum | Promise<Petroleum>;
    updatePetroleum(updatePetroleumInput: UpdatePetroleumInput): Petroleum | Promise<Petroleum>;
    removePetroleum(id: number): Petroleum | Promise<Petroleum>;
    createZoneinfo(createZoneinfoInput: CreateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    updateZoneinfo(updateZoneinfoInput: UpdateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    removeZoneinfo(id: number): Zoneinfo | Promise<Zoneinfo>;
    createOldcopy(createOldcopyInput: CreateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    updateOldcopy(updateOldcopyInput: UpdateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    removeOldcopy(id: number): Oldcopy | Promise<Oldcopy>;
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
}

export type DateTime = any;
type Nullable<T> = T | null;
