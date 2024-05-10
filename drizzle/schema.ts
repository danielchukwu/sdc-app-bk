import { relations, sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from '@paralleldrive/cuid2';

export const cases = sqliteTable('cases', {
  id: text('id', { length: 50 }).$defaultFn(() => createId()).notNull().primaryKey(),
  title: text('title', { length: 100}).notNull(),
  description: text('description', { length: 2000}).notNull(),
  location: text('location', { length: 50 }).notNull(),
  type: text('type', { length: 15 }).notNull(),
  createdAt: text('timestamp').notNull().default(sql`(current_timestamp)`),
});
export type TCases = typeof cases.$inferInsert;
export const casesRelations = relations(cases, ({many}) => ({
  offenders: many(offenders),
}));

export const offenders = sqliteTable('offenders', {
  id: text('id', { length: 50 }).$defaultFn(() => createId()).notNull().primaryKey(),
  name: text('name', { length: 50}).notNull(),
  email: text('email', { length: 50}).notNull(),
  matricNo: text('matricNo', { length: 30}).notNull(),
  statement: text('statement', { length: 250}).notNull(),

  caseId: text('case_id', { length: 50 }).references(() => cases.id, {onDelete: 'cascade', onUpdate: 'no action'}),
  createdAt: text('timestamp').notNull().default(sql`(current_timestamp)`),
});
export type TOffenders = typeof offenders.$inferInsert;
export const offendersRelations = relations(offenders, ({one}) => ({
  case: one(cases, {fields: [offenders.caseId], references: [cases.id]}),
}))