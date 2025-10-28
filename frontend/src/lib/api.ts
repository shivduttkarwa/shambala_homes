export const API_URL = process.env.REACT_APP_API_URL as string;

export async function getHomePage() {
  const url = `${API_URL}/api/pages?filters[slug][$eq]=home&populate[sections][populate]=*`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json();
}
