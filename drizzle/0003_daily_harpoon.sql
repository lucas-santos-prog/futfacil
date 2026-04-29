CREATE TABLE "addresses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"street" text NOT NULL,
	"number" text NOT NULL,
	"community" text NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"arena_network_id" uuid
);
--> statement-breakpoint
CREATE TABLE "arenas" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"capacity" integer NOT NULL,
	"pricePerHour" numeric(10, 2) NOT NULL,
	"emphasis_arena" boolean DEFAULT false,
	"address_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "arena_networks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"oficial_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event_arenas" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_id" uuid NOT NULL,
	"arena_id" uuid NOT NULL,
	CONSTRAINT "event_arenas_event_id_arena_id_pk" PRIMARY KEY("event_id","arena_id")
);
--> statement-breakpoint
CREATE TABLE "event_teams" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_id" uuid NOT NULL,
	"team_id" uuid NOT NULL,
	CONSTRAINT "event_teams_event_id_team_id_pk" PRIMARY KEY("event_id","team_id")
);
--> statement-breakpoint
CREATE TABLE "event_types" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"max_teams" integer NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"event_type_id" uuid NOT NULL,
	"tournament_event_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "teams" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"phone" text,
	"address_id" uuid
);
--> statement-breakpoint
CREATE TABLE "tournament_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "arena" CASCADE;--> statement-breakpoint
DROP TABLE "evento" CASCADE;--> statement-breakpoint
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_arena_network_id_arena_networks_id_fk" FOREIGN KEY ("arena_network_id") REFERENCES "public"."arena_networks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "arenas" ADD CONSTRAINT "arenas_address_id_addresses_id_fk" FOREIGN KEY ("address_id") REFERENCES "public"."addresses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_arenas" ADD CONSTRAINT "event_arenas_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_arenas" ADD CONSTRAINT "event_arenas_arena_id_arenas_id_fk" FOREIGN KEY ("arena_id") REFERENCES "public"."arenas"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_teams" ADD CONSTRAINT "event_teams_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_teams" ADD CONSTRAINT "event_teams_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_event_type_id_event_types_id_fk" FOREIGN KEY ("event_type_id") REFERENCES "public"."event_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_tournament_event_id_tournament_events_id_fk" FOREIGN KEY ("tournament_event_id") REFERENCES "public"."tournament_events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_address_id_addresses_id_fk" FOREIGN KEY ("address_id") REFERENCES "public"."addresses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "event_arena_event_idx" ON "event_arenas" USING btree ("event_id");--> statement-breakpoint
CREATE INDEX "event_arena_arena_idx" ON "event_arenas" USING btree ("arena_id");--> statement-breakpoint
CREATE INDEX "event_team_event_idx" ON "event_teams" USING btree ("event_id");--> statement-breakpoint
CREATE INDEX "event_team_team_idx" ON "event_teams" USING btree ("team_id");