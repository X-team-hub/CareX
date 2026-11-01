import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const envPath = path.join(root, ".env");
const configPath = path.join(root, "js", "config.js");

if (!fs.existsSync(envPath)) {
  throw new Error("Missing .env file in CareX root folder.");
}

const envText = fs.readFileSync(envPath, "utf8");

function getEnv(name) {
  const match = envText.match(
    new RegExp(`^${name}\\s*=\\s*(.*)$`, "m")
  );

  return match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
}

const supabaseUrl = getEnv("SUPABASE_URL");
const supabasePublishableKey = getEnv("SUPABASE_PUBLISHABLE_KEY");

if (!supabaseUrl) {
  throw new Error("Missing SUPABASE_URL in .env");
}

if (!supabasePublishableKey) {
  throw new Error("Missing SUPABASE_PUBLISHABLE_KEY in .env");
}

if (!supabasePublishableKey.startsWith("sb_publishable_")) {
  throw new Error(
    "SUPABASE_PUBLISHABLE_KEY must start with sb_publishable_"
  );
}

const config = `/* Generated from .env. Do not place service-role/secret keys here. */
window.CAREX_CONFIG = Object.freeze({
  supabaseUrl: ${JSON.stringify(supabaseUrl)},
  supabasePublishableKey: ${JSON.stringify(supabasePublishableKey)}
});
`;

fs.writeFileSync(configPath, config, "utf8");

console.log("CareX config generated successfully:");
console.log(configPath);