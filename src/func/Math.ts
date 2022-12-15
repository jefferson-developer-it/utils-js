
export default function GenRandom(mn: number, mx: number): number {
    return Math.random() * (mx - mn) + mn
}