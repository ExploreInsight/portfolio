const vercelProductionHost = process.env.VERCEL_ENV === "production"
  ? process.env.VERCEL_PROJECT_PRODUCTION_URL
  : undefined;

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (vercelProductionHost ? `https://${vercelProductionHost}` : undefined);

export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
