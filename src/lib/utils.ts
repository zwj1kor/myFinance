import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// International number formatting utilities
export function formatNumber(value: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(value);
}

export function formatCurrency(
  value: number, 
  currency: string = 'INR', 
  locale: string = 'en-IN'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCompactNumber(value: number, locale: string = 'en-US'): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }
  return formatNumber(value, locale);
}

export function formatCurrencyCompact(
  value: number, 
  currency: string = 'INR',
  locale: string = 'en-IN'
): string {
  const symbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : '€';
  if (value >= 10_000_000) {
    return `${symbol}${(value / 10_000_000).toFixed(1)}Cr`;
  }
  if (value >= 100_000) {
    return `${symbol}${(value / 100_000).toFixed(1)}L`;
  }
  if (value >= 1_000) {
    return `${symbol}${formatNumber(value / 1_000, locale)}K`;
  }
  return `${symbol}${formatNumber(value, locale)}`;
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}
