import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const tracks = pgTable("tracks", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    duration: integer()
})