import assert from "node:assert/strict";
import { test } from "node:test";
import { giftCardExpiresAt, canRescheduleGiftCard, canRefundGiftCard } from "./gift-card-policy.ts";

test("la carte cadeau est valable six mois calendaires", () => {
  assert.equal(giftCardExpiresAt(new Date("2026-10-26T14:25:00Z")).toISOString(), "2027-04-26T14:25:00.000Z");
  assert.equal(giftCardExpiresAt(new Date("2026-08-31T10:00:00Z")).toISOString(), "2027-02-28T10:00:00.000Z");
});

test("un seul report est accepté", () => {
  assert.equal(canRescheduleGiftCard(0), true);
  assert.equal(canRescheduleGiftCard(1), false);
  assert.equal(canRescheduleGiftCard(2), false);
  assert.equal(canRescheduleGiftCard(-1), false);
});

test("la carte n’est pas remboursable hors droits légaux", () => {
  assert.equal(canRefundGiftCard(false), false);
  assert.equal(canRefundGiftCard(true), true);
});