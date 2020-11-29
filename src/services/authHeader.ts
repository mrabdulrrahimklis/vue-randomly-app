export function getAuthHeader(): Record<string, string> {
  const storedUser = localStorage.getItem("token") || "";

  try {
    const userToken = JSON.parse(storedUser);
    return { Authorization: `Token ${userToken}` };
  } catch (error) {
    return {};
  }
}
