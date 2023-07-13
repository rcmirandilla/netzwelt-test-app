export default async function getAllTerritoriesLoader() {
  // TODO: connect with backend

  const res = await fetch("/api/territories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
