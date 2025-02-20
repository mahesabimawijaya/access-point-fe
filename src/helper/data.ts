export const permissions = [
  {
    role: "Admin",
    description: "Admins have full access to manage the system, users, and configurations. They can create, edit, and delete data, assign roles, and oversee system functionality.",
    permissions: ["Manage users (create, edit, delete, assign roles)", "Access all system settings", "View and modify all data", "Generate reports and analytics", "Handle security and permissions"],
  },
  {
    role: "User",
    description: "Users have limited access to the system. They can view data, generate reports, and access system settings.",
    permissions: ["View data", "Generate reports", "Access system settings"],
  },
  {
    role: "Guest",
    description: "Guests have view-only access to the system. They can view data and generate reports.",
    permissions: ["View data", "Generate reports"],
  },
];

export const user = {
  name: "Mahesa Wijaya",
  email: "mahesabw26@gmail.com",
  avatar: "avatar.jpg",
};
