export function calculateDaysActive(purchaseDate?: string | Date | null): number {
  if (!purchaseDate) return 0
  const basePurchase = new Date(purchaseDate)
  if (Number.isNaN(basePurchase.getTime())) return 0

  const today = new Date()
  basePurchase.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)

  const diffMs = today.getTime() - basePurchase.getTime()
  if (diffMs <= 0) return 0
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  return diffDays
}

