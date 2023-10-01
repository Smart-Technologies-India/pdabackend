
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

export enum NocType {
    NONE = "NONE",
    NOCTYPEONE = "NOCTYPEONE",
    NOCTYPETWO = "NOCTYPETWO",
    NOCTYPETHREE = "NOCTYPETHREE"
}

export enum ClassType {
    NONE = "NONE",
    CLASSTYPEONE = "CLASSTYPEONE",
    CLASSTYPETWO = "CLASSTYPETWO",
    CLASSTYPETHREE = "CLASSTYPETHREE"
}

export enum OutletType {
    NONE = "NONE",
    OUTLETTYPEONE = "OUTLETTYPEONE",
    OUTLETTYPETWO = "OUTLETTYPETWO",
    OUTLETTYPETHREE = "OUTLETTYPETHREE"
}

export enum TypeOfInfo {
    NONE = "NONE",
    CP = "CP",
    OC = "OC",
    MAPS = "MAPS"
}

export enum FormType {
    NONE = "NONE",
    PETROLEUM = "PETROLEUM",
    RTI = "RTI",
    ZONE = "ZONE",
    DEMOLITION = "DEMOLITION",
    OLDCOPY = "OLDCOPY",
    LANDRECORDS = "LANDRECORDS",
    UNAUTHORISED = "UNAUTHORISED"
}

export enum queryStatus {
    NONE = "NONE",
    SUBMIT = "SUBMIT",
    INPROCESS = "INPROCESS",
    PAYMENT = "PAYMENT",
    QUERYRAISED = "QUERYRAISED",
    APPROVED = "APPROVED",
    REJCTED = "REJCTED",
    CERTIFICATEGRANT = "CERTIFICATEGRANT",
    COMPLETED = "COMPLETED"
}

export enum QueryType {
    NONE = "NONE",
    INTRA = "INTRA",
    INTER = "INTER",
    PUBLIC = "PUBLIC"
}

export enum QueryStatus {
    NONE = "NONE",
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    REPLIED = "REPLIED",
    RESOLVED = "RESOLVED"
}

export enum PaymentType {
    NONE = "NONE",
    CASH = "CASH",
    CHEQUE = "CHEQUE",
    NETBANKING = "NETBANKING",
    CCDC = "CCDC",
    UPI = "UPI"
}

export enum PaymentStatus {
    NONE = "NONE",
    PENDING = "PENDING",
    PAID = "PAID"
}

export enum UserType {
    USER = "USER",
    DEPARTMENT = "DEPARTMENT"
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface MobileLoginInput {
    contact?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
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

export interface FilterCommonInput {
    user_type?: Nullable<UserType>;
    user_id: number;
    form_type?: Nullable<FormType>;
}

export interface SendFileLandsectionInput {
    stageId: string;
    formRefId: string;
    documentUrl: string;
}

export interface SearchDealinghandInput {
    file_type: string;
    collector: boolean;
    dycollector: boolean;
    atp: boolean;
    jtp: boolean;
    je: boolean;
    fieldinspector: boolean;
    sitesupervisor: boolean;
    architectassistant: boolean;
    planningdraughtsman: boolean;
    spdraughtsman: boolean;
    stdraughtsman: boolean;
    landsupted: boolean;
    mamlatdar: boolean;
    eocs: boolean;
    dept1: boolean;
    dept2: boolean;
    dept3: boolean;
    dept4: boolean;
}

export interface SearchSurveyInput {
    villageId?: Nullable<number>;
    survey_no?: Nullable<string>;
    sub_division?: Nullable<string>;
    owner_name?: Nullable<string>;
}

export interface SearchQueryInput {
    stage: FormType;
    form_id: number;
    user_id?: Nullable<number>;
    status?: Nullable<Status>;
    query_type?: Nullable<QueryType>;
}

export interface SearchPaymentInput {
    form_id?: Nullable<number>;
    deptuser_id?: Nullable<number>;
    user_id?: Nullable<number>;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    form_type?: Nullable<FormType>;
    paymentstatus?: Nullable<PaymentStatus>;
    id?: Nullable<number>;
    reference?: Nullable<string>;
    paymentType?: Nullable<PaymentType>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
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
    payment_doc?: Nullable<string>;
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
    address?: Nullable<string>;
    otp?: Nullable<string>;
    user_uid?: Nullable<string>;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreatePetroleumInput {
    name: string;
    userId: number;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    company_name?: Nullable<string>;
    company_region?: Nullable<string>;
    designation?: Nullable<string>;
    noc_type?: Nullable<NocType>;
    class_type?: Nullable<ClassType>;
    outlet_type?: Nullable<OutletType>;
    capacity?: Nullable<number>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    noc_fire_url?: Nullable<string>;
    na_order_url?: Nullable<string>;
    sanad_url?: Nullable<string>;
    coastguard_url?: Nullable<string>;
    plan_url?: Nullable<string>;
    explosive_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdatePetroleumInput {
    name?: Nullable<string>;
    userId?: Nullable<number>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    company_name?: Nullable<string>;
    company_region?: Nullable<string>;
    designation?: Nullable<string>;
    noc_type?: Nullable<NocType>;
    class_type?: Nullable<ClassType>;
    outlet_type?: Nullable<OutletType>;
    capacity?: Nullable<number>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    noc_fire_url?: Nullable<string>;
    na_order_url?: Nullable<string>;
    sanad_url?: Nullable<string>;
    coastguard_url?: Nullable<string>;
    plan_url?: Nullable<string>;
    explosive_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    user_uid?: Nullable<string>;
    location_address?: Nullable<string>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateZoneinfoInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    nakel_url_1_14: string;
    remarks?: Nullable<string>;
    nakal_url_1_14?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateZoneinfoInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    nakel_url_1_14?: Nullable<string>;
    remarks?: Nullable<string>;
    nakal_url_1_14?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateOldcopyInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    prev_application_date?: Nullable<DateTime>;
    prev_application_number?: Nullable<string>;
    type_of_information?: Nullable<TypeOfInfo>;
    information_needed?: Nullable<string>;
    aadhar_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateOldcopyInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    prev_application_date?: Nullable<DateTime>;
    prev_application_number?: Nullable<string>;
    type_of_information?: Nullable<TypeOfInfo>;
    information_needed?: Nullable<string>;
    aadhar_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
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
    illegal_sqmt?: Nullable<string>;
    attachments?: Nullable<string>;
    recommend?: Nullable<boolean>;
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

export interface CreateDealinghandInput {
    file_type: FormType;
    collector?: Nullable<boolean>;
    dycollector?: Nullable<boolean>;
    atp?: Nullable<boolean>;
    jtp?: Nullable<boolean>;
    je?: Nullable<boolean>;
    fieldinspector?: Nullable<boolean>;
    sitesupervisor?: Nullable<boolean>;
    architectassistant?: Nullable<boolean>;
    planningdraughtsman?: Nullable<boolean>;
    spdraughtsman?: Nullable<boolean>;
    stdraughtsman?: Nullable<boolean>;
    landsupted?: Nullable<boolean>;
    mamlatdar?: Nullable<boolean>;
    eocs?: Nullable<boolean>;
    dept1?: Nullable<boolean>;
    dept2?: Nullable<boolean>;
    dept3?: Nullable<boolean>;
    dept4?: Nullable<boolean>;
}

export interface UpdateDealinghandInput {
    file_type?: Nullable<FormType>;
    collector?: Nullable<boolean>;
    dycollector?: Nullable<boolean>;
    atp?: Nullable<boolean>;
    jtp?: Nullable<boolean>;
    je?: Nullable<boolean>;
    fieldinspector?: Nullable<boolean>;
    sitesupervisor?: Nullable<boolean>;
    architectassistant?: Nullable<boolean>;
    planningdraughtsman?: Nullable<boolean>;
    spdraughtsman?: Nullable<boolean>;
    stdraughtsman?: Nullable<boolean>;
    landsupted?: Nullable<boolean>;
    mamlatdar?: Nullable<boolean>;
    eocs?: Nullable<boolean>;
    dept1?: Nullable<boolean>;
    dept2?: Nullable<boolean>;
    dept3?: Nullable<boolean>;
    dept4?: Nullable<boolean>;
    id: number;
}

export interface CreateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreatePaymentInput {
    form_id: number;
    deptuser_id: number;
    user_id: number;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    form_type: FormType;
    paymentstatus: PaymentStatus;
}

export interface UpdatePaymentInput {
    form_id?: Nullable<number>;
    deptuser_id?: Nullable<number>;
    user_id?: Nullable<number>;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    form_type?: Nullable<FormType>;
    paymentstatus?: Nullable<PaymentStatus>;
    id: number;
    reference?: Nullable<string>;
    paymentType?: Nullable<PaymentType>;
    deletedAt?: Nullable<DateTime>;
}

export interface Rti {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<number>;
    subject_info?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    description?: Nullable<string>;
    information?: Nullable<string>;
    proverty_line_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    attachments?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
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
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    address?: Nullable<string>;
    user_uid?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Petroleum {
    id?: Nullable<number>;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    company_name?: Nullable<string>;
    company_region?: Nullable<string>;
    designation?: Nullable<string>;
    location_address?: Nullable<string>;
    noc_type?: Nullable<NocType>;
    class_type?: Nullable<ClassType>;
    outlet_type?: Nullable<OutletType>;
    capacity?: Nullable<number>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    noc_fire_url?: Nullable<string>;
    na_order_url?: Nullable<string>;
    sanad_url?: Nullable<string>;
    coastguard_url?: Nullable<string>;
    plan_url?: Nullable<string>;
    explosive_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Zoneinfo {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    survey_no?: Nullable<string>;
    sub_division?: Nullable<string>;
    nakel_url_1_14?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    attachments?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Oldcopy {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    survey_no?: Nullable<string>;
    sub_division?: Nullable<string>;
    prev_application_date?: Nullable<DateTime>;
    prev_application_number?: Nullable<string>;
    type_of_information: TypeOfInfo;
    information_needed?: Nullable<string>;
    aadhar_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Auth {
    token: string;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
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

export interface FileCount {
    RTI: number;
    ZONE: number;
    OLDCOPY: number;
    PETROLEUM: number;
    UNAUTHORIZED: number;
    LANDRECORDS: number;
    MAMLATDAR: number;
    DEMOLITION: number;
}

export interface VillageCount {
    count: number;
    village: string;
}

export interface OfficerCount {
    count: number;
    auth_user_id: string;
}

export interface FileProgressDetails {
    pending: number;
    completed: number;
    rejected: number;
}

export interface FileProgress {
    RTI: FileProgressDetails;
    ZONE: FileProgressDetails;
    OLDCOPY: FileProgressDetails;
    PETROLEUM: FileProgressDetails;
    UNAUTHORIZED: FileProgressDetails;
    LANDRECORDS: FileProgressDetails;
    MAMLATDAR: FileProgressDetails;
    DEMOLITION: FileProgressDetails;
}

export interface VillageProgressDetails {
    formType: string;
    count: number;
}

export interface VillageProgress {
    village: string;
    fileCounts: VillageProgressDetails[];
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
    land_formid?: Nullable<string>;
    land_stageid?: Nullable<string>;
    illegal_sqmt?: Nullable<string>;
    attachments?: Nullable<string>;
    recommend?: Nullable<boolean>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Dealinghand {
    id: number;
    file_type: string;
    collector: boolean;
    dycollector: boolean;
    atp: boolean;
    jtp: boolean;
    je: boolean;
    fieldinspector: boolean;
    sitesupervisor: boolean;
    architectassistant: boolean;
    planningdraughtsman: boolean;
    spdraughtsman: boolean;
    stdraughtsman: boolean;
    landsupted: boolean;
    mamlatdar: boolean;
    eocs: boolean;
    dept1: boolean;
    dept2: boolean;
    dept3: boolean;
    dept4: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Village {
    id: number;
    name: string;
}

export interface Survey {
    id: number;
    villageId: number;
    survey_no: string;
    sub_division?: Nullable<string>;
    owner_name: string;
    area: string;
    zone: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface QueryData {
    id: number;
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    from_user?: Nullable<User>;
    to_user?: Nullable<User>;
}

export interface Payment {
    id: number;
    form_id: number;
    deptuser_id: number;
    user_id: number;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    reference?: Nullable<string>;
    form_type: FormType;
    paymentType: PaymentType;
    paymentstatus: PaymentStatus;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface IQuery {
    getAllRti(): Rti[] | Promise<Rti[]>;
    getAllRtiById(id: number): Rti | Promise<Rti>;
    getUserById(id: number): User | Promise<User>;
    getUserDPById(id: number): User | Promise<User>;
    getAllPetroleum(): Petroleum[] | Promise<Petroleum[]>;
    getPetroleumById(id: number): Petroleum | Promise<Petroleum>;
    getAllZone(): Zoneinfo[] | Promise<Zoneinfo[]>;
    getAllZoneById(id: number): Zoneinfo | Promise<Zoneinfo>;
    getAllOldCopy(): Oldcopy[] | Promise<Oldcopy[]>;
    getOldCopyById(id: number): Oldcopy | Promise<Oldcopy>;
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    loginwithid(id: number): Auth | Promise<Auth>;
    verifyOtp(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    getAllCommon(): Common[] | Promise<Common[]>;
    getAllCommonById(id: number): Common | Promise<Common>;
    searchCommon(searchCommonInput: SearchCommonInput): Common[] | Promise<Common[]>;
    filterCommon(filterCommonInput: FilterCommonInput): Common[] | Promise<Common[]>;
    getFileCount(): FileCount | Promise<FileCount>;
    villageFileCount(): VillageCount[] | Promise<VillageCount[]>;
    officerFileCount(): OfficerCount[] | Promise<OfficerCount[]>;
    officerFileProgress(): FileProgress | Promise<FileProgress>;
    villageFileProgress(): VillageProgress[] | Promise<VillageProgress[]>;
    getAllLand(): Landsection[] | Promise<Landsection[]>;
    getAllLandById(id: number): Landsection | Promise<Landsection>;
    sendFileOutside(sendFileLandsectionInput: SendFileLandsectionInput): boolean | Promise<boolean>;
    sendFileOutsideillegal(sendFileLandsectionInput: SendFileLandsectionInput): boolean | Promise<boolean>;
    getAllDealingHand(): Dealinghand[] | Promise<Dealinghand[]>;
    getDealingHandById(id: number): Dealinghand | Promise<Dealinghand>;
    searchDealingHand(searchDealinghandInput: SearchDealinghandInput): Dealinghand[] | Promise<Dealinghand[]>;
    getuserid(filetype: string): number | Promise<number>;
    getAllVillage(): Village[] | Promise<Village[]>;
    getAllVillageById(id: number): Village | Promise<Village>;
    getAllSurvey(): Survey[] | Promise<Survey[]>;
    getAllSurveyById(id: number): Survey | Promise<Survey>;
    getSurveyNumber(searchSurveyInput: SearchSurveyInput): Survey[] | Promise<Survey[]>;
    getSubDivision(searchSurveyInput: SearchSurveyInput): Survey[] | Promise<Survey[]>;
    getAllQuery(): QueryData[] | Promise<QueryData[]>;
    getQueryById(id: number): QueryData | Promise<QueryData>;
    searchQuery(searchQueryInput: SearchQueryInput): QueryData[] | Promise<QueryData[]>;
    getAllPayment(): Payment[] | Promise<Payment[]>;
    getAllPaymentById(id: number): Payment | Promise<Payment>;
    searchPayment(searchPaymentInput: SearchPaymentInput): Payment[] | Promise<Payment[]>;
}

export interface IMutation {
    createRti(createRtiInput: CreateRtiInput): Rti | Promise<Rti>;
    updateRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    deleteRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    updateUserDPById(updateUserInput: UpdateUserInput): number | Promise<number>;
    updateUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    createPetroleum(createPetroleumInput: CreatePetroleumInput): Petroleum | Promise<Petroleum>;
    updatePetroleumById(updatePetroleumInput: UpdatePetroleumInput): Petroleum | Promise<Petroleum>;
    deletePetroleumById(updatePetroleumInput: UpdatePetroleumInput): Petroleum | Promise<Petroleum>;
    createZone(createZoneinfoInput: CreateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    updateZoneById(updateZoneinfoInput: UpdateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    deleteZoneById(updateZoneinfoInput: UpdateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    createOldCopy(createOldcopyInput: CreateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    updateOldCopyById(updateOldcopyInput: UpdateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    deleteOldCopuById(updateOldcopyInput: UpdateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
    mobileLogin(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    createCommon(createCommonInput: CreateCommonInput): Common | Promise<Common>;
    updateCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    deleteCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    createLand(createLandsectionInput: CreateLandsectionInput): Landsection | Promise<Landsection>;
    updateLandById(updateLandsectionInput: UpdateLandsectionInput): Landsection | Promise<Landsection>;
    deleteLandById(updateLandsectionInput: UpdateLandsectionInput): Landsection | Promise<Landsection>;
    getFromOutside(outsideLandsectionInput: OutsideLandsectionInput): Common | Promise<Common>;
    createDealingHand(createDealinghandInput: CreateDealinghandInput): Dealinghand | Promise<Dealinghand>;
    updateDealingHandById(updateDealinghandInput: UpdateDealinghandInput): Dealinghand | Promise<Dealinghand>;
    createQuery(createQueryInput: CreateQueryInput): QueryData | Promise<QueryData>;
    updateQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    deleteQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    createPayment(createPaymentInput: CreatePaymentInput): Payment | Promise<Payment>;
    updatePaymentById(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;
    deletePaymentById(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;
}

export type DateTime = any;
type Nullable<T> = T | null;
