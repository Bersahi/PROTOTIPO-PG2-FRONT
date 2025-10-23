import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-GT', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function formatCurrency(amount: number, currency: string = 'GTQ'): string {
  return new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function generateTrackingNumber(): string {
  const prefix = 'PKG';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substr(2, 3).toUpperCase();
  return `${prefix}${timestamp}${random}`;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function getRegionByDepartment(department: string): string {
  const regions: Record<string, string> = {
    'guatemala': 'Metropolitana',
    'quetzaltenango': 'Occidente',
    'sacatepequez': 'Central',
    'chimaltenango': 'Central',
    'escuintla': 'Sur',
    'santa_rosa': 'Sur',
    'jutiapa': 'Oriente',
    'jalapa': 'Oriente',
    'zacapa': 'Oriente',
    'chiquimula': 'Oriente',
    'izabal': 'Norte',
    'alta_verapaz': 'Norte',
    'baja_verapaz': 'Norte',
    'peten': 'Norte',
    'huehuetenango': 'Occidente',
    'quiche': 'Occidente',
    'solola': 'Occidente',
    'totonicapan': 'Occidente',
    'retalhuleu': 'Occidente',
    'san_marcos': 'Occidente',
    'suchitepequez': 'Sur'
  };
  
  return regions[department] || 'Desconocida';
}
