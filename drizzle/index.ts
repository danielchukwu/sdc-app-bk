import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from './schema';

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// const turso = createClient({
//   url: 'http://127.0.0.1:8080'
// });

export const db = drizzle(turso, { schema });
