export type ApplicationUserRole = "unauthorized" | "user" | "admin" | "superadmin";

export interface ApplicationUser {
    email: string;
    role: ApplicationUserRole;
};