export const giftCardPolicy = {
  validityMonths: 6,
  maxReschedules: 1,
  refundable: false,
} as const;

export const giftCardOffer = {
  priceCents: 12000,
  currency: "EUR",
  durationMinutes: 60,
  allDigitalPhotosIncluded: true,
} as const;

export const giftCardPrice = new Intl.NumberFormat("fr-FR", { style: "currency", currency: giftCardOffer.currency, maximumFractionDigits: 0 }).format(giftCardOffer.priceCents / 100);
export const giftCardDuration = `${giftCardOffer.durationMinutes / 60} h`;

export const GIFT_CARD_WHATSAPP_URL = `https://wa.me/33695349187?text=${encodeURIComponent(`Bonjour Thom, je souhaite offrir une carte cadeau pour un shooting photo surf de ${giftCardDuration} à ${giftCardPrice}, avec toutes les photos numériques incluses. Peux-tu m’aider à préparer ma carte cadeau ?`)}`;

export function giftCardExpiresAt(purchasedAt: Date): Date {
  if (Number.isNaN(purchasedAt.getTime())) throw new Error("Date d’achat invalide");
  const expiresAt = new Date(purchasedAt);
  const day = expiresAt.getUTCDate();
  expiresAt.setUTCDate(1);
  expiresAt.setUTCMonth(expiresAt.getUTCMonth() + giftCardPolicy.validityMonths);
  const lastDay = new Date(Date.UTC(expiresAt.getUTCFullYear(), expiresAt.getUTCMonth() + 1, 0)).getUTCDate();
  expiresAt.setUTCDate(Math.min(day, lastDay));
  return expiresAt;
}

export function canRescheduleGiftCard(previousReschedules: number): boolean {
  return Number.isInteger(previousReschedules) && previousReschedules >= 0 && previousReschedules < giftCardPolicy.maxReschedules;
}

export function canRefundGiftCard(statutoryRightApplies: boolean): boolean {
  return statutoryRightApplies || giftCardPolicy.refundable;
}