export function calculateSubtotal(prices: number[]): number {
    return prices.reduce((acc, current) => acc + current, 0);
}

export function calculateIVA(subtotal: number, taxRate: number): number {
    return subtotal * taxRate;
}

export function calculateTotal(subtotal: number, iva: number): number {
    return subtotal + iva;
}