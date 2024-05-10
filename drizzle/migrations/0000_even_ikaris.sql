CREATE TABLE `cases` (
	`id` text(50) PRIMARY KEY NOT NULL,
	`title` text(100) NOT NULL,
	`description` text(2000) NOT NULL,
	`location` text(50) NOT NULL,
	`type` text(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `offenders` (
	`id` text(50) PRIMARY KEY NOT NULL,
	`name` text(50) NOT NULL,
	`email` text(50) NOT NULL,
	`matricNo` text(30) NOT NULL,
	`statement` text(250) NOT NULL,
	`case_id` text(50),
	FOREIGN KEY (`case_id`) REFERENCES `cases`(`id`) ON UPDATE no action ON DELETE cascade
);
