export namespace DoctorModel {
  export interface DoctorInfo {
    name: string;
    department: string;
    title: string;
    phone: string;
    email?: string;
    image?: string;
    isActive: boolean;
  }
}
