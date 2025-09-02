import z from "zod";
import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  PROJECT_NAME: z.string(),
  NEXT_PUBLIC_URL: z.string(),
});

tryParseEnv(EnvSchema);

export type EnvSchema = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
