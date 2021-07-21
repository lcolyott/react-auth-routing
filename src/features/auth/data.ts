import { ApplicationUser } from "./types";

const DummyUsers: ApplicationUser[] = [
    { email: "User@email.com", role: "user" },
    { email: "Admin@email.com", role: "admin" },
    { email: "SuperAdmin@email.com", role: "superadmin" }
];

export default DummyUsers;