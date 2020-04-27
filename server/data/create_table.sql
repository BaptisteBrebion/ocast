-- -----------------------------------------------------
-- Schema ocast
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table "users"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "photo_url" VARCHAR NULL,
  "role" VARCHAR(32) NOT NULL,
  "surname" VARCHAR(32) NOT NULL,
  "firstname" VARCHAR(32) NOT NULL,
  "phone" VARCHAR NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(60) NOT NULL,
  "website" VARCHAR(255) NULL,
  "adress" VARCHAR(255) NULL,
  "city" VARCHAR(255) NULL,
  "country" VARCHAR(255) NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL
);

-- -----------------------------------------------------
-- Table "candidates"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "candidates" CASCADE;

CREATE TABLE IF NOT EXISTS "candidates" (
  "id" SERIAL PRIMARY KEY,
  "users_id" INT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  "gender" VARCHAR NULL,
  "age" INT NULL,
  "availability" BOOLEAN NULL,
  "handicap" VARCHAR(255) NULL,
  "language" VARCHAR(255) NULL,
  "experience" VARCHAR(255) NULL,
  "training" VARCHAR(255) NULL,
  "hair" VARCHAR(255) NULL,
  "eyes" VARCHAR(255) NULL,
  "size" INT NULL,
  "skills" TEXT [],
  "corpulence" VARCHAR(255) NULL,
  "distinctive_sign" VARCHAR(255) NULL,
  "ethnicity" VARCHAR(255) NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL
);

-- -----------------------------------------------------
-- Table "recruiters"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "recruiters" CASCADE;

CREATE TABLE IF NOT EXISTS "recruiters" (
  "id" SERIAL PRIMARY KEY,
  "users_id" INT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  "photo_url" VARCHAR NULL,
  "society" VARCHAR(255) NULL,
  "siret" INTEGER NULL,
  "filmography" VARCHAR(255) NULL,
  "created_at" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL
);

DROP TABLE IF EXISTS "messages" CASCADE;
CREATE TABLE IF NOT EXISTS "messages" (
  "id" SERIAL PRIMARY KEY,
  "author_id" INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "receiver_id" INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "text" VARCHAR NULL,
  "isRead" BOOLEAN NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL
);

DROP TABLE IF EXISTS "conversation" CASCADE;
DROP TABLE IF EXISTS "skills" CASCADE;
DROP TABLE IF EXISTS "candidates_has_skills" CASCADE;