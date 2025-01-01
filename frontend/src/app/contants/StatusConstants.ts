enum Statuses {
    succeeded='succeeded',
    loading='loading',
    failed='failed',
    idle='idle',
    mainrole="admin",
    role="manager",
    error="error"
}

export const statusTypes: Record<keyof typeof Statuses, string> = Statuses;
