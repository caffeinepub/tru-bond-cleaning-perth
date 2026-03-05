import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    serviceType: ServiceType;
    name: string;
    submittedAt: Time;
    email: string;
    message: string;
    preferredDate: Time;
    phone: string;
}
export enum ServiceType {
    windowCleaning = "windowCleaning",
    commercialCleaning = "commercialCleaning",
    other = "other",
    residentialCleaning = "residentialCleaning",
    carpetCleaning = "carpetCleaning"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, phone: string, serviceType: ServiceType, message: string, preferredDate: Time): Promise<void>;
}
