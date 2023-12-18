export const loginWithEmailPassword = (email: string, password: string) => {
  return new Promise((resolve) => {
    if (email === "test@test.com" && password === "password123") {
      resolve({
        status: 200,
        data: {
          userId: 1,
          name: "Test User",
        },
      });
    }
  });
};
