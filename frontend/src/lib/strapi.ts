// src/lib/strapi.ts
export const API_URL =
  (import.meta.env.VITE_API_URL as string) ?? 'http://localhost:1337';

export function mediaUrl(input?: any): string | undefined {
  if (!input) return undefined;
  const url =
    typeof input === 'string'
      ? input
      : input?.url ??
        input?.data?.attributes?.url ??
        input?.attributes?.url;
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('/')) return `${API_URL}${url}`;
  return url;
}

export async function fetchHomePage() {
  const url =
    `${API_URL}/api/pages` +
    `?filters[slug][$eq]=home` +
    `&populate[sections][on][sections.hero][populate]=*`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status} ${await res.text()}`);
  const json = await res.json();

  const attrs = json?.data?.[0]?.attributes ?? null;
  // TEMP: see exactly what Strapi returns
  // eslint-disable-next-line no-console
  console.log('[Strapi] sections raw →', attrs?.sections);
  return attrs;
}

