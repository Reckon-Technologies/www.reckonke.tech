/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod";
import { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    return EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      const missing: string[] = [];
      const invalid: string[] = [];

      for (const issue of error.issues) {
        const key = issue.path[0]?.toString() || "unknown";
        if (issue.message.includes("Required")) {
          missing.push(key);
        }
        else {
          invalid.push(`${key} (${issue.message})`);
        }
      }

      let message = "❌ Environment validation failed:\n";
      if (missing.length > 0) {
        message += `\nMissing:\n${missing.map(k => `- ${k}`).join("\n")}`;
      }
      if (invalid.length > 0) {
        message += `\nInvalid:\n${invalid.map(k => `- ${k}`).join("\n")}`;
      }

      console.error(message);
      process.exit(1);
    }

    throw error; // rethrow if it’s not a ZodError
  }
}
