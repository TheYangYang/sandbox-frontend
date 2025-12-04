// Example API function for user form
export async function submitUserForm(user: { name: string; email: string }) {
  // Simulate API call
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => resolve({ success: true }), 500);
  });
}
