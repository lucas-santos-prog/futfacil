CREATE TABLE "arena" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"location" text NOT NULL,
	"capacity" text NOT NULL,
	"image" text NOT NULL,
	"pricePerHour" text NOT NULL,
	"emphasisArena" boolean DEFAULT false
);
