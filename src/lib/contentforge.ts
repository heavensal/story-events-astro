const DEFAULT_BASE = "https://contentforge.1344.fr/api/v1";

function normalizeBase(raw: string): string {
	return raw.trim().replace(/\/+$/, "");
}

/** Base API (sans slash final), lue depuis `CONTENTFORGE_URL`. */
export function getContentforgeBaseUrl(): string {
	const env = import.meta.env.CONTENTFORGE_URL;
	if (typeof env === "string" && env.trim() !== "") {
		return normalizeBase(env);
	}
	return DEFAULT_BASE;
}

/**
 * URL absolue Contentforge : base + segment.
 * @param path — ex. `"faqs"` ou `"/faqs"`
 */
export function contentforgeApiUrl(path: string): string {
	const base = getContentforgeBaseUrl();
	const segment = path.startsWith("/") ? path : `/${path}`;
	return `${base}${segment}`;
}
