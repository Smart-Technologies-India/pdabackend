
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

export enum FormType {
    NONE = "NONE",
    PETROLEUM = "PETROLEUM",
    RTI = "RTI",
    ZONE = "ZONE",
    DEMOLITION = "DEMOLITION",
    OLDCOPY = "OLDCOPY",
    LANDRECORDS = "LANDRECORDS",
    MAMLATDAR = "MAMLATDAR"
}

export enum queryStatus {
    NONE = "NONE",
    SUBMIT = "SUBMIT",
    INPROCESS = "INPROCESS",
    QUERYRAISED = "QUERYRAISED",
    APPROVED = "APPROVED",
    REJCTED = "REJCTED",
    CERTIFICATEGRANT = "CERTIFICATEGRANT"
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface SearchCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
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

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    contact?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role?: Nullable<Role>;
    department?: Nullable<Department>;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
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

export interface CreateCommonInput {
    form_id: number;
    user_id: number;
    auth_user_id: string;
    focal_user_id: string;
    intra_user_id: string;
    inter_user_id: string;
    village: string;
    name: string;
    number: string;
    form_status: number;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
}

export interface UpdateCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateLandsectionInput {
    userId: number;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    area?: Nullable<string>;
    na_type?: Nullable<string>;
    zone?: Nullable<string>;
    road_access?: Nullable<string>;
    no_road_access?: Nullable<string>;
    width_adequate?: Nullable<string>;
    is_dimension_plot_adequate?: Nullable<string>;
    is_crz?: Nullable<string>;
    is_monument?: Nullable<string>;
    other_remark?: Nullable<string>;
    atp_recommendation?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateLandsectionInput {
    userId?: Nullable<number>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    area?: Nullable<string>;
    na_type?: Nullable<string>;
    zone?: Nullable<string>;
    road_access?: Nullable<string>;
    no_road_access?: Nullable<string>;
    width_adequate?: Nullable<string>;
    is_dimension_plot_adequate?: Nullable<string>;
    is_crz?: Nullable<string>;
    is_monument?: Nullable<string>;
    other_remark?: Nullable<string>;
    atp_recommendation?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    is_mounment?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface OutsideLandsectionInput {
    form_id: number;
    stage_id: number;
    village_id: number;
    name: string;
    survey_no: string;
    area: string;
    purpose: string;
    number: string;
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
    rejection_reason: string;
    certificate_id: Status;
    certificate_date: DateTime;
    certificate_url: string;
    comments_dept: string;
    condition_to_follow: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface User {
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
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
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Common {
    id: number;
    form_id: number;
    user_id: number;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village: string;
    name: string;
    number: string;
    form_status: number;
    form_type: FormType;
    query_status: queryStatus;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
}

export interface Landsection {
    id?: Nullable<number>;
    userId?: Nullable<number>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    area?: Nullable<string>;
    na_type?: Nullable<string>;
    zone?: Nullable<string>;
    road_access?: Nullable<string>;
    no_road_access?: Nullable<string>;
    width_adequate?: Nullable<string>;
    is_dimension_plot_adequate?: Nullable<string>;
    is_crz?: Nullable<string>;
    is_monument?: Nullable<string>;
    other_remark?: Nullable<string>;
    atp_recommendation?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Village {
    id: number;
    name: string;
}

export interface IQuery {
    getAllRti(): Rti[] | Promise<Rti[]>;
    getAllRtiById(id: number): Rti | Promise<Rti>;
    getUserById(id: number): User | Promise<User>;
    getUserDPById(id: number): User | Promise<User>;
    petroleum(id: number): Petroleum | Promise<Petroleum>;
    zoneinfo(id: number): Zoneinfo | Promise<Zoneinfo>;
    oldcopy(id: number): Oldcopy | Promise<Oldcopy>;
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    loginwithid(id: number): Auth | Promise<Auth>;
    getAllCommon(): Common[] | Promise<Common[]>;
    getAllCommonById(id: number): Common | Promise<Common>;
    searchCommon(searchCommonInput: SearchCommonInput): Common[] | Promise<Common[]>;
    getAllLand(): Landsection[] | Promise<Landsection[]>;
    getAllLandById(id: number): Landsection | Promise<Landsection>;
    getAllVillageById(id: number): Village | Promise<Village>;
}

export interface IMutation {
    createRti(createRtiInput: CreateRtiInput): Rti | Promise<Rti>;
    updateRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    deleteRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    updateUserDPById(updateUserInput: UpdateUserInput): number | Promise<number>;
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
    createCommon(createCommonInput: CreateCommonInput): Common | Promise<Common>;
    updateCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    deleteCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    createLand(createLandsectionInput: CreateLandsectionInput): Landsection | Promise<Landsection>;
    updateLandById(updateLandsectionInput: UpdateLandsectionInput): Landsection | Promise<Landsection>;
    deleteLandById(updateLandsectionInput: UpdateLandsectionInput): Landsection | Promise<Landsection>;
    getFromOutside(outsideLandsectionInput: OutsideLandsectionInput): Common | Promise<Common>;
}

export type DateTime = any;
type Nullable<T> = T | null;
