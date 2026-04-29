import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  index,
  uuid,
  check,
  integer,
  numeric,
  primaryKey,
} from "drizzle-orm/pg-core";

// User Schema
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

// Session Schema
export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

// Account Schema
export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

// Verification Schema
export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

// UserRelations Schema
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

// SessionRelations Schema
export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

// AccountRelations Schema
export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

// Events Schema
export const eventos = pgTable("events", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  name: text("name").notNull(),

  price: numeric("price", { precision: 10, scale: 2 }).notNull(),

  maxTeams: integer("max_teams").notNull(),

  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),

  eventTypeId: uuid("event_type_id")
    .notNull()
    .references(() => eventType.id),

  tournamentEventId: uuid("tournament_event_id")
    .notNull()
    .references(() => tournamentEvent.id),
});

// Arena network Schema
export const arenaNetwork = pgTable("arena_networks", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  oficialName: text("oficial_name").notNull(),
});

// Arenas Schema - checked
export const arena = pgTable("arenas", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  capacity: integer("capacity").notNull(),
  pricePerHour: numeric("pricePerHour", { precision: 10, scale: 2 }).notNull(),
  emphasisArena: boolean("emphasis_arena").default(false),

  addressId: uuid("address_id")
    .notNull()
    .references(() => address.id, { onDelete: "cascade" }),
});

// Adress Schema - checked
export const address = pgTable("addresses", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  street: text("street").notNull(),
  number: text("number").notNull(),
  community: text("community").notNull(),
  state: text("state").notNull(),
  country: text("country").notNull(),

  arenaNetworkId: uuid("arena_network_id").references(() => arenaNetwork.id),
});

// EventType Schema - checked
export const eventType = pgTable("event_types", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
});

// TournementEvent Schema -
export const tournamentEvent = pgTable("tournament_events", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
});

// Team Schema - checked
export const team = pgTable("teams", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  phone: text("phone"),
  addressId: uuid("address_id").references(() => address.id),
});

// relations

// EventArena Schema - checked
export const eventArena = pgTable(
  "event_arenas",
  {
    id: uuid("id")
      .default(sql`gen_random_uuid()`)
      .primaryKey(),

    eventId: uuid("event_id")
      .notNull()
      .references(() => eventos.id, { onDelete: "cascade" }),

    arenaId: uuid("arena_id")
      .notNull()
      .references(() => arena.id, { onDelete: "cascade" }),
  },
  (table) => [
    index("event_arena_event_idx").on(table.eventId),
    index("event_arena_arena_idx").on(table.arenaId),
  ],
);

// EventTeam Relation -
export const eventTeam = pgTable(
  "event_teams",
  {
    id: uuid("id")
      .default(sql`gen_random_uuid()`)
      .primaryKey(),

    eventId: uuid("event_id")
      .notNull()
      .references(() => eventos.id, { onDelete: "cascade" }),

    teamId: uuid("team_id")
      .notNull()
      .references(() => team.id, { onDelete: "cascade" }),
  },
  (table) => [
    index("event_team_event_idx").on(table.eventId),
    index("event_team_team_idx").on(table.teamId),
  ],
);
